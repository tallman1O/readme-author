import * as fs from "fs";
import * as path from "path";
import type { PackageJson } from "../core/package-parser";

function buildProjectTree(
  projectPath: string,
  maxDepth = 2,
  maxEntries = 60,
): string[] {
  const ignored = new Set([".git", "node_modules", "dist"]);
  const treeLines: string[] = ["."];
  let emitted = 1;

  function walk(currentPath: string, prefix: string, depth: number): void {
    if (depth > maxDepth || emitted >= maxEntries) {
      return;
    }

    const entries = fs
      .readdirSync(currentPath, { withFileTypes: true })
      .filter((entry) => !ignored.has(entry.name))
      .sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });

    for (let index = 0; index < entries.length; index += 1) {
      if (emitted >= maxEntries) {
        treeLines.push(`${prefix}└── ...`);
        emitted += 1;
        return;
      }

      const entry = entries[index];
      if (!entry) {
        continue;
      }
      const isLast = index === entries.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const suffix = entry.isDirectory() ? "/" : "";
      treeLines.push(`${prefix}${connector}${entry.name}${suffix}`);
      emitted += 1;

      if (entry.isDirectory() && depth < maxDepth) {
        const nextPrefix = `${prefix}${isLast ? "    " : "│   "}`;
        walk(path.join(currentPath, entry.name), nextPrefix, depth + 1);
      }
    }
  }

  walk(projectPath, "", 0);
  return treeLines;
}

export function generateReadmeMarkdown(
  pkg: PackageJson,
  projectPath: string,
): string {
  const lines: string[] = [];

  const projectName = pkg.name || "Project Name";
  const description = pkg.description || "A short description of your project.";
  const versionBadge = pkg.version
    ? `![Version](https://img.shields.io/badge/version-${encodeURIComponent(pkg.version)}-blue)`
    : "";
  const licenseBadge = pkg.license
    ? `![License](https://img.shields.io/badge/license-${encodeURIComponent(pkg.license)}-green)`
    : "";

  lines.push(`# ${projectName}`);
  lines.push("");
  if (versionBadge || licenseBadge) {
    lines.push([versionBadge, licenseBadge].filter(Boolean).join(" "));
    lines.push("");
  }

  lines.push(description);
  lines.push("");
  lines.push("## Table of Contents");
  lines.push("- [Overview](#overview)");
  lines.push("- [Getting Started](#getting-started)");
  lines.push("- [Available Scripts](#available-scripts)");
  lines.push("- [Project Structure](#project-structure)");
  lines.push("- [Dependencies](#dependencies)");
  lines.push("- [Configuration](#configuration)");
  lines.push("- [Contributing](#contributing)");
  lines.push("- [License](#license)");
  lines.push("");
  lines.push("## Overview");
  lines.push(description);
  lines.push("");
  lines.push("## Getting Started");
  lines.push("### Prerequisites");
  lines.push("- Node.js 18+");
  lines.push("- npm");
  lines.push("");
  lines.push("### Installation");
  lines.push("npm install");
  lines.push("");
  lines.push("### Run");
  lines.push("```bash");
  lines.push("npm run build");
  lines.push("```");
  lines.push("");
  lines.push("## Available Scripts");

  const scriptNames = Object.keys(pkg.scripts ?? {});

  if (scriptNames.length === 0) {
    lines.push("- (no npm scripts defined)");
  } else {
    lines.push("| Script | Command |");
    lines.push("| --- | --- |");
    for (const name of scriptNames) {
      lines.push(`| \`${name}\` | \`npm run ${name}\` |`);
    }
  }
  lines.push("");
  lines.push("## Project Structure");
  lines.push("```text");
  lines.push(...buildProjectTree(projectPath));
  lines.push("```");
  lines.push("");
  lines.push("## Dependencies");

  const dependencies = Object.keys(pkg.dependencies ?? {});
  const devDependencies = Object.keys(pkg.devDependencies ?? {});

  lines.push(`- Runtime dependencies: ${dependencies.length}`);
  lines.push(`- Development dependencies: ${devDependencies.length}`);

  if (dependencies.length > 0) {
    lines.push("");
    lines.push("### Runtime");
    for (const dep of dependencies.slice(0, 10)) {
      lines.push(`- \`${dep}\``);
    }
  }

  if (devDependencies.length > 0) {
    lines.push("");
    lines.push("### Development");
    for (const dep of devDependencies.slice(0, 10)) {
      lines.push(`- \`${dep}\``);
    }
  }

  lines.push("");
  lines.push("## Configuration");

  if (pkg.keywords.length > 0) {
    lines.push(
      `- Keywords: ${pkg.keywords.map((keyword) => `\`${keyword}\``).join(", ")}`,
    );
  } else {
    lines.push("- Keywords: _Not specified_");
  }

  if (pkg.repository) {
    lines.push(`- Repository: ${pkg.repository}`);
  }

  if (pkg.author) {
    lines.push(`- Author: ${pkg.author}`);
  }

  if (pkg.version) {
    lines.push(`- Version: ${pkg.version}`);
  }

  lines.push("");
  lines.push("## Contributing");
  lines.push(
    "Contributions are welcome. Please open an issue first to discuss any major change.",
  );
  lines.push("");
  lines.push("## License");
  lines.push(
    pkg.license
      ? `Licensed under the ${pkg.license} license.`
      : "License information is not specified.",
  );

  return lines.join("\n");
}
