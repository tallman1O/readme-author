#!/usr/bin/env node

import { Command } from "commander";
import chalk from 'chalk';

const program = new Command();

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
program
  .name("readme-gen")
  .description("Auto generate README.md from project")
  .version("1.0.0");

program.parse(process.argv);