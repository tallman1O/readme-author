import * as fs from "fs";
import * as path from "path";
import type { PackageJson } from "../core/package-parser";
import { TECH_BADGE_MAP, TechBadge } from "../data/tech-badge";

// ---------------------------------------------------------------------------
// Project tree
// ---------------------------------------------------------------------------

function buildProjectTree(projectPath: string, maxDepth = 2, maxEntries = 60): string {
  const ignored = new Set([".git", "node_modules", "dist", ".next", "build", "coverage", ".turbo"]);
  const lines: string[] = ["."];
  let emitted = 1;

  function walk(currentPath: string, prefix: string, depth: number): void {
    if (depth > maxDepth || emitted >= maxEntries) return;

    const entries = fs
      .readdirSync(currentPath, { withFileTypes: true })
      .filter((e) => !ignored.has(e.name))
      .sort((a, b) => {
        if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
        return a.name.localeCompare(b.name);
      });

    entries.forEach((entry, index) => {
      if (emitted >= maxEntries) { lines.push(`${prefix}└── ...`); emitted++; return; }
      const isLast = index === entries.length - 1;
      lines.push(`${prefix}${isLast ? "└── " : "├── "}${entry.name}${entry.isDirectory() ? "/" : ""}`);
      emitted++;
      if (entry.isDirectory() && depth < maxDepth)
        walk(path.join(currentPath, entry.name), `${prefix}${isLast ? "    " : "│   "}`, depth + 1);
    });
  }

  walk(projectPath, "", 0);
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Tech stack detection
// ---------------------------------------------------------------------------

function buildBadgeUrl(badge: TechBadge): string {
  return `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?style=flat-square&logo=${badge.logo}&logoColor=${badge.logoColor}`;
}

function detectTechStack(pkg: PackageJson): Array<{ badge: TechBadge }> {
  const allDeps = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
  ].map((d) => d.toLowerCase());

  const seen = new Set<string>();

  return TECH_BADGE_MAP.filter(({ match, badge }) => {
    if (seen.has(badge.label)) return false;
    const found = match.some((fragment) =>
      allDeps.some((dep) => dep === fragment || dep.startsWith(`${fragment}/`) || dep.includes(fragment))
    );
    if (found) seen.add(badge.label);
    return found;
  }).map(({ badge }) => ({ badge }));
}

// ---------------------------------------------------------------------------
// README template
// ---------------------------------------------------------------------------

export function generateReadmeMarkdown(pkg: PackageJson, projectPath: string): string {
  const name        = pkg.name        ?? "My Project";
  const description = pkg.description ?? "A short description of your project.";
  const techStack   = detectTechStack(pkg);
  const scripts     = Object.keys(pkg.scripts ?? {});
  const deps        = Object.keys(pkg.dependencies ?? {});
  const devDeps     = Object.keys(pkg.devDependencies ?? {});

  const badges = [
    pkg.version && `![Version](https://img.shields.io/badge/version-${encodeURIComponent(pkg.version)}-blue?style=flat-square)`,
    pkg.license && `![License](https://img.shields.io/badge/license-${encodeURIComponent(pkg.license)}-green?style=flat-square)`,
  ].filter(Boolean).join("  ");

  const techRows = techStack.length
    ? `| Tech | Description |\n|------|-------------|\n` +
      techStack.map(({ badge }) => `| ![${badge.label}](${buildBadgeUrl(badge)}) | ${badge.description} |`).join("\n")
    : "_No recognizable tech stack dependencies detected._";

  const scriptList = scripts.length
    ? scripts.map((s) => `✅ \`npm run ${s}\``).join("\n")
    : "_No npm scripts defined._";

  const devCommand = scripts.includes("dev")
    ? "npm run dev"
    : scripts.includes("start")
      ? "npm run start"
      : "npm run build";

  const depDetails = deps.length ? `
<details>
<summary>Runtime dependencies</summary>

${deps.map((d) => `- \`${d}\` — ${(pkg.dependencies as Record<string, string>)[d]}`).join("\n")}

</details>` : "";

  const devDepDetails = devDeps.length ? `
<details>
<summary>Dev dependencies</summary>

${devDeps.map((d) => `- \`${d}\` — ${(pkg.devDependencies as Record<string, string>)[d]}`).join("\n")}

</details>` : "";

  const meta = [
    pkg.keywords?.length && `**Keywords:** ${pkg.keywords.map((k) => `\`${k}\``).join(", ")}`,
    pkg.repository       && `**Repository:** ${pkg.repository}`,
    pkg.author           && `**Author:** ${pkg.author}`,
    pkg.version          && `**Version:** \`${pkg.version}\``,
  ].filter(Boolean).join("\n\n");

  return `# ${name}

![${name} banner](https://picsum.photos/1200/400)

${badges}

> ${description}

---

## ✨ What is this project?

${description}

---

## 🚀 Available Scripts

${scriptList}

---

## 💻 Tech Stack

${techRows}

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

\`\`\`bash
git clone <your-repo-url>
cd ${name}
npm install
\`\`\`

### Development

\`\`\`bash
${devCommand}
\`\`\`

---

## 📁 Project Structure

\`\`\`text
${buildProjectTree(projectPath)}
\`\`\`

---

## 📦 Dependencies

- **Runtime:** ${deps.length} package${deps.length !== 1 ? "s" : ""}
- **Development:** ${devDeps.length} package${devDeps.length !== 1 ? "s" : ""}
${depDetails}
${devDepDetails}

---

## ⚙️ Configuration

${meta || "_No configuration metadata found._"}

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss any major changes.

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'feat: add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 📄 License

${pkg.license ? `Licensed under the **${pkg.license}** license. See [LICENSE](./LICENSE) for more information.` : "License information is not specified."}
`;
}