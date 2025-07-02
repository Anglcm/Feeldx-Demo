# Demo FeelDX

A modern React + Vite application with shadcn/ui components, dark mode, responsive navigation, and mobile sidebar support.

## Features
- ⚡️ Vite + React
- 🎨 shadcn/ui component library
- 🌗 Dark/Light mode toggle
- 🧭 Responsive navigation bar with sidebar drawer on mobile
- 🖼️ Logo support (light/dark)
- 📦 Ready for deployment on Vercel

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/):
1. Push your code to GitHub.
2. Import your repo in Vercel and select the Vite framework preset.
3. Set the build output directory to `dist` if needed.
4. Deploy!

## Project Structure
- `src/components/` — UI and layout components
- `src/assets/` — Images and static assets
- `src/app/` — App routes and layout
- `src/config/` — App configuration

## Customization
- **Logo:** Place your logo images in `src/assets/` and update the import in `Header`.
- **Dark Mode:** Uses Tailwind's `dark:` classes and a toggle in the navigation bar.
- **Mobile Sidebar:** Hamburger menu appears on mobile, opening a sidebar with navigation links.

## License
MIT
