#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import chalk from "chalk";
import ora, { Ora } from "ora";
import { Command } from "commander";
import { detectNodeProject } from "./core/stack-detector";
import { parsePackageJson } from "./core/package-parser";
import { generateReadmeMarkdown } from "./generator/markdown-generator";
import nodeFiglet = require("figlet");
import gradient from "gradient-string";

const program = new Command();

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

program
  .name("readme-author")
  .description("Auto generate README.md from project")
  .version("1.0.0");

console.log(
    gradient.rainbow(nodeFiglet.textSync("README AUTHOR", {
        horizontalLayout: "default",
      })
    ))

    
function askOverwrite(filePath: string): Promise<boolean> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `A README.md already exists at "${filePath}". Overwrite? (y/n) `,
      (answer) => {
        rl.close();
        const normalized = answer.trim().toLowerCase();
        resolve(normalized === "y" || normalized === "yes");
      }
    );
  });
}

program
  .argument("[projectPath]", "Path to project directory", ".")
  .action(async (projectPathArg: string) => {
    const projectPath = path.resolve(process.cwd(), projectPathArg);

    let spinner: Ora | null = null;

    try {
      spinner = ora(chalk.cyan("Analyzing project...")).start();
      await sleep(500);

      if (!detectNodeProject(projectPath)) {
        spinner.fail(
          chalk.yellow("No supported project detected in the provided directory.")
        );
        return;
      }

      spinner.succeed(chalk.green("Project detected."));

      spinner = ora(chalk.cyan("Reading package.json...")).start();
      await sleep(500);

      const pkg = parsePackageJson(projectPath);

      spinner.succeed(chalk.green("package.json read successfully."));

      spinner = ora(chalk.cyan("Generating README content...")).start();
      await sleep(500);

      const markdown = generateReadmeMarkdown(pkg);

      spinner.succeed(chalk.green("README content generated."));

      const readmePath = path.join(projectPath, "README.md");
      const creatingNew = !fs.existsSync(readmePath);

      if (!creatingNew) {
        if (spinner) spinner.stop();

        const shouldOverwrite = await askOverwrite(readmePath);

        if (!shouldOverwrite) {
          console.log(
            chalk.yellow("Aborted. Existing README.md was not overwritten.")
          );
          return;
        }

        spinner = ora(chalk.cyan("Updating existing README.md...")).start();
      } else {
        spinner = ora(chalk.cyan("Creating README.md...")).start();
      }

      await sleep(500);
      fs.writeFileSync(readmePath, markdown, "utf8");

      spinner.succeed(
        chalk.green(
          creatingNew
            ? "README.md created successfully!"
            : "README.md updated successfully!"
        )
      );
    } catch (error) {
      if (spinner) {
        spinner.fail(chalk.red("Failed to generate README.md."));
      } else {
        console.error(chalk.red("Failed to generate README.md."));
      }

      if (error instanceof Error) {
        console.error(chalk.red(error.message));
      }

      process.exitCode = 1;
    }
  });

program.parse(process.argv);