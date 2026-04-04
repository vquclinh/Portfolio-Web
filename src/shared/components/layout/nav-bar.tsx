import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Briefcase, Heart, Clock } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { path: '/memories', label: 'Memories', icon: Heart },
  { path: '/timeline', label: 'Timeline', icon: Clock },
];

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const desktopRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [desktopSlider, setDesktopSlider] = useState({ left: 0, width: 0 });
  const [mobileSlider, setMobileSlider] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const activeIndex = navItems.findIndex((item) => {
    if (item.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.path);
  });

  // Update slider position whenever active tab or refs change
  useEffect(() => {
    const updateSliders = () => {
      const desktopEl = desktopRefs.current[activeIndex];
      const mobileEl = mobileRefs.current[activeIndex];

      if (desktopEl) {
        setDesktopSlider({
          left: desktopEl.offsetLeft,
          width: desktopEl.offsetWidth,
        });
      }
      if (mobileEl) {
        setMobileSlider({
          left: mobileEl.offsetLeft,
          width: mobileEl.offsetWidth,
        });
      }

      setReady(true);
    };

    const raf     = requestAnimationFrame(updateSliders);
    const timeout = setTimeout(updateSliders, 100);

    return () => {
       cancelAnimationFrame(raf);
       clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="relative flex items-center gap-1 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/60 rounded-full px-2 py-2 shadow-xl shadow-black/40">

        {/* ── Desktop ── */}
        <div className="relative hidden md:flex items-center gap-1">
          {/* Sliding pill */}
          <span
            className="absolute top-0 rounded-full bg-white shadow-sm pointer-events-none"
            style={{
              left: desktopSlider.left,
              width: desktopSlider.width,
              height: '100%',
              opacity: ready ? 1 : 0,
              transition: ready
                ? 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s'
                : 'none',
            }}
          />

          {navItems.map((item, i) => {
            const Icon = item.icon;
            const active = i === activeIndex;
            return (
              <button
                key={item.path}
                ref={(el) => { desktopRefs.current[i] = el; }}
                onClick={() => navigate(item.path)}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active ? 'text-black' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="relative flex md:hidden items-center gap-1">
          {/* Sliding pill */}
          <span
            className="absolute top-0 rounded-full bg-white shadow-sm pointer-events-none"
            style={{
              left: mobileSlider.left,
              width: mobileSlider.width,
              height: '100%',
              opacity: ready ? 1 : 0,
              transition: ready
                ? 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s'
                : 'none',
            }}
          />

          {navItems.map((item, i) => {
            const Icon = item.icon;
            const active = i === activeIndex;
            return (
              <button
                key={item.path}
                ref={(el) => { mobileRefs.current[i] = el; }}
                onClick={() => navigate(item.path)}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active ? 'text-black' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}