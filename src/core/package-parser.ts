import * as fs from "fs";
import * as path from "path";

export type PackageJson = {
  name: string;
  description: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
};

export function parsePackageJson(projectPath: string): PackageJson {
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = fs.readFileSync(packageJsonPath, "utf8");
  const packageStructure = JSON.parse(packageJson) as PackageJson;
  return {
    name: packageStructure.name,
    description: packageStructure.description,
    scripts: packageStructure.scripts,
    dependencies: packageStructure.dependencies,
  };
}