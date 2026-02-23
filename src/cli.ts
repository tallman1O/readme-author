#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

console.log("Hello world");
program
  .name("readme-gen")
  .description("Auto generate README.md from project")
  .version("1.0.0");

program.parse(process.argv);