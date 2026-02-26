import * as fs from "fs";
import * as path from "path";

export type PackageJson = {
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
  keywords: string[];
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  repository: string;
};

export function parsePackageJson(projectPath: string): PackageJson {
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = fs.readFileSync(packageJsonPath, "utf8");
  const packageStructure = JSON.parse(packageJson) as {
    name?: string;
    description?: string;
    version?: string;
    author?: string;
    license?: string;
    keywords?: string[];
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    repository?: string | { url?: string };
  };

  const repository =
    typeof packageStructure.repository === "string"
      ? packageStructure.repository
      : (packageStructure.repository?.url ?? "");

  return {
    name: packageStructure.name ?? "",
    description: packageStructure.description ?? "",
    version: packageStructure.version ?? "",
    author: packageStructure.author ?? "",
    license: packageStructure.license ?? "",
    keywords: packageStructure.keywords ?? [],
    scripts: packageStructure.scripts ?? {},
    dependencies: packageStructure.dependencies ?? {},
    devDependencies: packageStructure.devDependencies ?? {},
    repository,
  };
}
