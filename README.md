# readme-author

![readme-author banner](https://picsum.photos/1200/400)

![Version](https://img.shields.io/badge/version-0.1.6-blue?style=flat-square)  ![License](https://img.shields.io/badge/license-ISC-green?style=flat-square)

> Zero-config CLI tool to auto-generate README.md from your project

---

## ✨ What is this project?

Zero-config CLI tool to auto-generate README.md from your project

---

## 🚀 Available Scripts

✅ `npm run build`
✅ `npm run start`

---

## 💻 Tech Stack

| Tech | Description |
|------|-------------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | TypeScript |

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
git clone <your-repo-url>
cd readme-author
npm install
```

### Development

```bash
npm run start
```

---

## 📁 Project Structure

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
│   ├── data/
│   │   └── tech-badge.ts
│   ├── generator/
│   │   └── markdown-generator.ts
│   └── cli.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 📦 Dependencies

- **Runtime:** 6 packages
- **Development:** 5 packages

<details>
<summary>Runtime dependencies</summary>

- `chalk` — ^5.6.2
- `commander` — ^14.0.3
- `figlet` — ^1.10.0
- `fs-extra` — ^11.3.3
- `gradient-string` — ^3.0.0
- `ora` — ^9.3.0

</details>

<details>
<summary>Dev dependencies</summary>

- `@types/figlet` — ^1.7.0
- `@types/gradient-string` — ^1.1.6
- `@types/node` — ^25.3.0
- `ts-node` — ^10.9.2
- `typescript` — ^5.9.3

</details>

---

## ⚙️ Configuration

**Keywords:** `cli`, `readme`, `documentation`, `nodejs`, `developer-tools`

**Repository:** https://github.com/tallman1O/readme-author.git

**Author:** Mehul Uttam

**Version:** `0.1.6`

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss any major changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Licensed under the **ISC** license. See [LICENSE](./LICENSE) for more information.
