#!/usr/bin/env node

import { detectNodeProject } from "./core/stack-detector";
import { Command } from "commander";

const program = new Command();

program
  .name("readme-author")
  .description("Auto generate README.md from project")
  .version("1.0.0");

program.action(() => {
  const projectPath = process.cwd();

  if (detectNodeProject(projectPath)) {
    console.log("Node.js project detected");
  } else {
    console.log("No supported project detected");
  }
});

program.parse(process.argv);