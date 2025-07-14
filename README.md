This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Libraries Used

- [shadcn/ui](https://ui.shadcn.com/) – Beautiful, customizable React components built with Radix UI and Tailwind CSS.
- [motion](https://motion.dev/) – Animation library for React, used for smooth transitions and effects.
- [@radix-ui/react-*](https://www.radix-ui.com/docs/primitives/overview/introduction) – Unstyled, accessible UI primitives for building high-quality design systems.
- [class-variance-authority](https://cva.style/docs) – Utility for managing complex variant-based class names in Tailwind CSS.
- [lucide-react](https://lucide.dev/) – Icon library for React, providing a consistent set of SVG icons.
- [next-themes](https://github.com/pacocoursey/next-themes) – Theme switching for Next.js apps (light/dark/system).
- [tailwindcss](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.

## Installation

Install dependencies using your preferred package manager:

```bash
yarn install
```

## Development

Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customizing Sections

Sections are React components located in `src/app/_components/` and `src/components/sections/`.

- To **edit** a section, modify the corresponding file (e.g., `src/app/_components/hero.tsx`).
- To **add** a new section, create a new component in one of these folders and import/use it in `src/app/page.tsx` or wherever needed.

## Adding Components from shadcn/ui

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components.

To add a new component, run:

```bash
npx shadcn-ui@latest add <component>
```

Replace `<component>` with the name of the component you want to add (e.g., `button`, `input`, `card`).

- Components will be placed in `src/components/ui/` by default (see `components.json`).
- You can customize aliases and paths in `components.json`.
- For more info, see the [shadcn/ui documentation](https://ui.shadcn.com/docs/installation).

