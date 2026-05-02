# UIfry

A React + Vite UI component library and app shell, built with Tailwind CSS, shadcn/ui, Radix UI, and MUI.

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **shadcn/ui / Radix UI** — accessible component primitives
- **MUI (Material UI)** — additional component set
- **React Router 7** — client-side routing
- **Motion** — animations

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx          # Root component
│   └── components/      # Shared UI components
├── imports/             # Figma-imported page components
│   ├── Dashboard/
│   ├── Frame54/
│   └── SaaSLandingPage/
└── styles/              # Global styles and Tailwind config
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Push to your connected branch to trigger a deployment, or run:

```bash
vercel --prod
```
