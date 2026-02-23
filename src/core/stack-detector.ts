import * as fs from "fs";
import * as path from "path";

export function detectNodeProject(projectPath: string): boolean {
  return fs.existsSync(path.join(projectPath, "package.json"));
}