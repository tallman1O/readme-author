# readme-author

![Version](https://img.shields.io/badge/version-0.1.5-blue) ![License](https://img.shields.io/badge/license-ISC-green)

Zero-config CLI tool to auto-generate README.md from your project

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview
Zero-config CLI tool to auto-generate README.md from your project

## Getting Started
### Prerequisites
- Node.js 18+
- npm

### Installation
npm install

### Run
```bash
npm run build
```

## Available Scripts
| Script | Command |
| --- | --- |
| `build` | `npm run build` |

## Project Structure
```text
.
├── public/
│   └── images/
│       └── mvp.png
├── scripts/
├── src/
│   ├── core/
│   │   ├── package-parser.ts
│   │   └── stack-detector.ts
│   ├── generator/
│   │   └── markdown-generator.ts
│   └── cli.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Dependencies
- Runtime dependencies: 6
- Development dependencies: 5

### Runtime
- `chalk`
- `commander`
- `figlet`
- `fs-extra`
- `gradient-string`
- `ora`

### Development
- `@types/figlet`
- `@types/gradient-string`
- `@types/node`
- `ts-node`
- `typescript`

## Configuration
- Keywords: `cli`, `readme`, `documentation`, `nodejs`, `developer-tools`
- Repository: https://github.com/tallman1O/readme-author.git
- Author: Mehul Uttam
- Version: 0.1.5

## Contributing
Contributions are welcome. Please open an issue first to discuss any major change.

## License
Licensed under the ISC license.