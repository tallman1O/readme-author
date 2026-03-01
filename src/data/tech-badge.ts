export interface TechBadge {
    label: string;
    description: string;
    color: string;
    logo: string;
    logoColor: string;
  }

export const TECH_BADGE_MAP: Array<{
    match: string[];
    badge: TechBadge;
  }> = [
    // Frameworks / meta-frameworks
    { match: ["next"], badge: { label: "Next.js", description: "Fullstack React framework", color: "000000", logo: "nextdotjs", logoColor: "white" } },
    { match: ["nuxt"], badge: { label: "Nuxt.js", description: "Vue meta-framework", color: "00DC82", logo: "nuxtdotjs", logoColor: "white" } },
    { match: ["react"], badge: { label: "React", description: "UI library", color: "61DAFB", logo: "react", logoColor: "black" } },
    { match: ["vue"], badge: { label: "Vue.js", description: "Progressive JS framework", color: "4FC08D", logo: "vuedotjs", logoColor: "white" } },
    { match: ["svelte"], badge: { label: "Svelte", description: "Compiler-based UI framework", color: "FF3E00", logo: "svelte", logoColor: "white" } },
    { match: ["angular"], badge: { label: "Angular", description: "TypeScript-based framework", color: "DD0031", logo: "angular", logoColor: "white" } },
    { match: ["solid-js", "solid"], badge: { label: "SolidJS", description: "Reactive UI library", color: "2C4F7C", logo: "solid", logoColor: "white" } },
    { match: ["remix"], badge: { label: "Remix", description: "Full-stack web framework", color: "000000", logo: "remix", logoColor: "white" } },
    { match: ["astro"], badge: { label: "Astro", description: "Static site builder", color: "FF5D01", logo: "astro", logoColor: "white" } },
  
    // Runtimes / environments
    { match: ["express"], badge: { label: "Express", description: "Node.js web framework", color: "000000", logo: "express", logoColor: "white" } },
    { match: ["fastify"], badge: { label: "Fastify", description: "Fast Node.js framework", color: "000000", logo: "fastify", logoColor: "white" } },
    { match: ["hono"], badge: { label: "Hono", description: "Edge-first web framework", color: "E36002", logo: "hono", logoColor: "white" } },
    { match: ["koa"], badge: { label: "Koa", description: "Expressive Node.js framework", color: "33333D", logo: "koajs", logoColor: "white" } },
    { match: ["nest", "@nestjs"], badge: { label: "NestJS", description: "Progressive Node.js framework", color: "E0234E", logo: "nestjs", logoColor: "white" } },
  
    // Language tooling
    { match: ["typescript"], badge: { label: "TypeScript", description: "TypeScript", color: "3178C6", logo: "typescript", logoColor: "white" } },
    { match: ["vite"], badge: { label: "Vite", description: "Next-gen frontend tooling", color: "646CFF", logo: "vite", logoColor: "white" } },
    { match: ["webpack"], badge: { label: "Webpack", description: "Module bundler", color: "8DD6F9", logo: "webpack", logoColor: "black" } },
    { match: ["esbuild"], badge: { label: "esbuild", description: "Extremely fast bundler", color: "FFCF00", logo: "esbuild", logoColor: "black" } },
    { match: ["turbo", "turborepo"], badge: { label: "Turborepo", description: "Monorepo build system", color: "EF4444", logo: "turborepo", logoColor: "white" } },
  
    // Auth
    { match: ["@clerk"], badge: { label: "Clerk", description: "Authentication & user management", color: "3E2DCC", logo: "clerk", logoColor: "white" } },
    { match: ["next-auth", "auth.js"], badge: { label: "NextAuth.js", description: "Auth for Next.js", color: "000000", logo: "nextdotjs", logoColor: "white" } },
    { match: ["passport"], badge: { label: "Passport.js", description: "Auth middleware", color: "34E27A", logo: "passport", logoColor: "white" } },
    { match: ["lucia"], badge: { label: "Lucia", description: "Auth library", color: "5f57ff", logo: "lucia", logoColor: "white" } },
    { match: ["better-auth"], badge: { label: "Better Auth", description: "TypeScript auth library", color: "000000", logo: "auth0", logoColor: "white" } },
  
    // Databases / ORMs
    { match: ["prisma"], badge: { label: "Prisma", description: "Type-safe ORM", color: "2D3748", logo: "prisma", logoColor: "white" } },
    { match: ["drizzle-orm", "drizzle"], badge: { label: "Drizzle ORM", description: "Type-safe SQL ORM", color: "FF9E0F", logo: "drizzle", logoColor: "white" } },
    { match: ["mongoose"], badge: { label: "Mongoose", description: "MongoDB ODM", color: "880000", logo: "mongoose", logoColor: "white" } },
    { match: ["typeorm"], badge: { label: "TypeORM", description: "ORM for TypeScript", color: "FE0902", logo: "typeorm", logoColor: "white" } },
    { match: ["sequelize"], badge: { label: "Sequelize", description: "Multi-dialect ORM", color: "52B0E7", logo: "sequelize", logoColor: "white" } },
    { match: ["@neondatabase", "neon"], badge: { label: "NeonDB", description: "Serverless Postgres", color: "0A4FFF", logo: "postgresql", logoColor: "white" } },
    { match: ["pg", "postgres", "postgresql"], badge: { label: "PostgreSQL", description: "Relational database", color: "4169E1", logo: "postgresql", logoColor: "white" } },
    { match: ["mysql2", "mysql"], badge: { label: "MySQL", description: "Relational database", color: "4479A1", logo: "mysql", logoColor: "white" } },
    { match: ["sqlite", "better-sqlite3"], badge: { label: "SQLite", description: "Embedded database", color: "003B57", logo: "sqlite", logoColor: "white" } },
    { match: ["mongodb"], badge: { label: "MongoDB", description: "NoSQL document database", color: "47A248", logo: "mongodb", logoColor: "white" } },
    { match: ["redis", "ioredis"], badge: { label: "Redis", description: "In-memory data store", color: "DC382D", logo: "redis", logoColor: "white" } },
    { match: ["@upstash"], badge: { label: "Upstash", description: "Serverless Redis / Kafka", color: "00E9A3", logo: "upstash", logoColor: "black" } },
    { match: ["@planetscale"], badge: { label: "PlanetScale", description: "Serverless MySQL platform", color: "000000", logo: "planetscale", logoColor: "white" } },
    { match: ["supabase"], badge: { label: "Supabase", description: "Open-source Firebase alternative", color: "3ECF8E", logo: "supabase", logoColor: "white" } },
    { match: ["firebase"], badge: { label: "Firebase", description: "Google app platform", color: "FFCA28", logo: "firebase", logoColor: "black" } },
    { match: ["convex"], badge: { label: "Convex", description: "Reactive backend platform", color: "F5414E", logo: "convex", logoColor: "white" } },
    { match: ["appwrite"], badge: { label: "Appwrite", description: "Open-source backend", color: "FD366E", logo: "appwrite", logoColor: "white" } },
  
    // Payments
    { match: ["stripe"], badge: { label: "Stripe", description: "Payment gateway", color: "008CDD", logo: "stripe", logoColor: "white" } },
    { match: ["razorpay"], badge: { label: "Razorpay", description: "Payment gateway (India)", color: "0C86EE", logo: "razorpay", logoColor: "white" } },
    { match: ["lemonsqueezy", "@lemonsqueezy"], badge: { label: "Lemon Squeezy", description: "All-in-one payments", color: "FFD43B", logo: "lemonsqueezy", logoColor: "black" } },
    { match: ["paddle"], badge: { label: "Paddle", description: "Revenue delivery platform", color: "0E1D35", logo: "paddle", logoColor: "white" } },
  
    // AI / ML
    { match: ["openai"], badge: { label: "OpenAI", description: "GPT API", color: "412991", logo: "openai", logoColor: "white" } },
    { match: ["@anthropic"], badge: { label: "Anthropic", description: "Claude AI API", color: "CC785C", logo: "anthropic", logoColor: "white" } },
    { match: ["langchain"], badge: { label: "LangChain", description: "LLM framework", color: "1C3C3C", logo: "langchain", logoColor: "white" } },
    { match: ["ai", "vercel-ai", "@ai-sdk"], badge: { label: "Vercel AI SDK", description: "AI streaming SDK", color: "000000", logo: "vercel", logoColor: "white" } },
  
    // UI libraries & styling
    { match: ["tailwindcss"], badge: { label: "Tailwind CSS", description: "Utility-first CSS", color: "06B6D4", logo: "tailwindcss", logoColor: "white" } },
    { match: ["shadcn", "@shadcn"], badge: { label: "shadcn/ui", description: "Accessible component library", color: "000000", logo: "shadcnui", logoColor: "white" } },
    { match: ["@radix-ui"], badge: { label: "Radix UI", description: "Accessible primitives", color: "161618", logo: "radixui", logoColor: "white" } },
    { match: ["chakra-ui", "@chakra-ui"], badge: { label: "Chakra UI", description: "Component library", color: "319795", logo: "chakraui", logoColor: "white" } },
    { match: ["antd", "ant-design"], badge: { label: "Ant Design", description: "Enterprise UI library", color: "0170FE", logo: "antdesign", logoColor: "white" } },
    { match: ["mantine"], badge: { label: "Mantine", description: "Full-featured component library", color: "339AF0", logo: "mantine", logoColor: "white" } },
    { match: ["framer-motion"], badge: { label: "Framer Motion", description: "Animation library", color: "0055FF", logo: "framer", logoColor: "white" } },
  
    // Testing
    { match: ["vitest"], badge: { label: "Vitest", description: "Vite-native test runner", color: "6E9F18", logo: "vitest", logoColor: "white" } },
    { match: ["jest"], badge: { label: "Jest", description: "JavaScript testing framework", color: "C21325", logo: "jest", logoColor: "white" } },
    { match: ["playwright"], badge: { label: "Playwright", description: "E2E testing", color: "2EAD33", logo: "playwright", logoColor: "white" } },
    { match: ["cypress"], badge: { label: "Cypress", description: "E2E testing framework", color: "17202C", logo: "cypress", logoColor: "white" } },
  
    // DevOps / Infra / Hosting
    { match: ["@vercel"], badge: { label: "Vercel", description: "Hosting & deployment", color: "000000", logo: "vercel", logoColor: "white" } },
    { match: ["@cloudflare", "cloudflare"], badge: { label: "Cloudflare", description: "Edge platform", color: "F38020", logo: "cloudflare", logoColor: "white" } },
    { match: ["aws-sdk", "@aws-sdk"], badge: { label: "AWS", description: "Amazon Web Services", color: "232F3E", logo: "amazonaws", logoColor: "white" } },
    { match: ["@google-cloud"], badge: { label: "Google Cloud", description: "Google Cloud Platform", color: "4285F4", logo: "googlecloud", logoColor: "white" } },
  
    // Queues / Realtime
    { match: ["bullmq", "bull"], badge: { label: "BullMQ", description: "Redis-based job queue", color: "D10F0F", logo: "redis", logoColor: "white" } },
    { match: ["socket.io"], badge: { label: "Socket.io", description: "Realtime engine", color: "010101", logo: "socketdotio", logoColor: "white" } },
    { match: ["pusher"], badge: { label: "Pusher", description: "Realtime messaging", color: "300D4F", logo: "pusher", logoColor: "white" } },
    { match: ["ably"], badge: { label: "Ably", description: "Realtime messaging", color: "FF5416", logo: "ably", logoColor: "white" } },
    { match: ["inngest"], badge: { label: "Inngest", description: "Event-driven workflows", color: "5F2EEA", logo: "inngest", logoColor: "white" } },
  
    // Misc popular utilities
    { match: ["zod"], badge: { label: "Zod", description: "Schema validation", color: "3E67B1", logo: "zod", logoColor: "white" } },
    { match: ["trpc", "@trpc"], badge: { label: "tRPC", description: "End-to-end typesafe APIs", color: "2596BE", logo: "trpc", logoColor: "white" } },
    { match: ["graphql", "apollo"], badge: { label: "GraphQL", description: "Query language for APIs", color: "E10098", logo: "graphql", logoColor: "white" } },
    { match: ["axios"], badge: { label: "Axios", description: "HTTP client", color: "5A29E4", logo: "axios", logoColor: "white" } },
    { match: ["sharp"], badge: { label: "Sharp", description: "Image processing", color: "99CC00", logo: "sharp", logoColor: "white" } },
    { match: ["nodemailer", "resend", "@sendgrid"], badge: { label: "Email", description: "Email sending service", color: "009688", logo: "maildotru", logoColor: "white" } },
  ];