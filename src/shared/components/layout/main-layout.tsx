import { Outlet } from 'react-router-dom';
import { NavBar } from './nav-bar';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="bg-black">
        <Outlet />
      </main>
      <footer className="bg-zinc-950 backdrop-blur-xl border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2026 My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}