import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "./navigation-menu";
import logoWhite from "@/assets/logo-white.png";
import logoDark from "@/assets/logo-dark.png";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="w-full shadow px-4 py-2 flex items-center justify-between" style={{ borderBottom: '1px solid var(--dark-services-bg)' }}>
      <Link to="/" className="font-bold text-lg text-primary flex items-center gap-2">
        <img src={logoWhite} alt="Logo" className="block dark:hidden h-12" />
        <img src={logoDark} alt="Logo" className="hidden dark:block h-12" />
      </Link>
      <div className="ml-auto hidden md:block">
        <NavigationMenu />
      </div>
      <button
        className="ml-auto md:hidden p-2"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-card w-64 h-full shadow-lg p-6 flex flex-col items-start animate-slide-in-right">
            <button
              className="absolute top-4 right-4"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="mt-12 flex flex-col gap-4 w-full">
              <a href="#hero" onClick={() => setSidebarOpen(false)} className="py-2">Home</a>
              <a href="#services" onClick={() => setSidebarOpen(false)} className="py-2">Service Overview</a>
              <a href="#value" onClick={() => setSidebarOpen(false)} className="py-2">Why Choose FeelDX?</a>
              <a href="#clients" onClick={() => setSidebarOpen(false)} className="py-2">Our Clients</a>
              <a href="#testimonials" onClick={() => setSidebarOpen(false)} className="py-2">Testimonials</a>
              <a href="/contact" onClick={() => setSidebarOpen(false)} className="py-2">Contact Us</a>
            </nav>
            {/* Theme Switch */}
            <div className="mt-8 flex items-center gap-2">
              <Sun size={18} />
              <Switch checked={isDark} onCheckedChange={setIsDark} />
              <Moon size={18} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
