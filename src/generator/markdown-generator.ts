import type { PackageJson } from "../core/package-parser";

export function generateReadmeMarkdown(pkg: PackageJson): string {
  const lines: string[] = [];

  const projectName = pkg.name || "Project Name";
  const description = pkg.description || "";

  lines.push(`# ${projectName}`);
  lines.push("");
  lines.push("## Description");
  lines.push(description);
  lines.push("");
  lines.push("## Installation");
  lines.push("npm install");
  lines.push("");
  lines.push("## Available Scripts");

  const scriptNames = Object.keys(pkg.scripts ?? {});

  if (scriptNames.length === 0) {
    lines.push("- (no npm scripts defined)");
  } else {
    for (const name of scriptNames) {
      lines.push(`- npm run ${name}`);
    }
  }

  return lines.join("\n");
}

