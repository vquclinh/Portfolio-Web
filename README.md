# Portfolio Web

A modern, interactive, and high-performance portfolio website designed to showcase my journey as a developer, researcher, and creator. Built with **React 19**, **TypeScript**, and **Tailwind CSS 4**, this project features a clean, responsive interface with smooth animations and multi-language support.

## 🚀 Overview

This website serves as a central hub for my professional work, featuring:
- **Project Showcase**: A curated list of research and development projects across AI, Web, and Game domains.
- **Interactive Timeline**: A visual journey of my education, work experience, and milestones.
- **Memories**: A gallery-style section for personal highlights and achievements.
- **Responsive Design**: Optimized for everything from mobile phones to high-resolution desktops.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with [Lucide React](https://lucide.dev/) icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, etc.)
- **Navigation**: [React Router 7](https://reactrouter.com/)

### Features & Integrations
- **Backend/Database**: [Supabase](https://supabase.com/)
- **i18n**: [i18next](https://www.i18next.com/) for multi-language support
- **Maps**: [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes) for Dark/Light mode support
- **Toasts**: [Sonner](https://sonner.emilkowal.ski/)

## 📂 Project Structure

```text
src/
├── assets/       # Static assets (images, icons)
├── data/         # Project data, timeline events, and memory items
├── lib/          # Utility functions and shared libraries
├── modules/      # Feature-specific components (Home, Portfolio, etc.)
├── shared/       # Shared UI components and layout
├── App.tsx       # Main application routing and layout
└── main.tsx      # Entry point
```

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vquclinh/Portfolio-Web.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if applicable):
   Create a `.env` file in the root directory and add your Supabase credentials.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📄 License

This project is personal and is used to showcase my work. Feel free to explore the code, but please respect the original content and design.

---
Built by [vquclinh](https://github.com/vquclinh)