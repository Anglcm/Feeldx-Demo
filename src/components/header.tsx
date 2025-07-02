import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "./navigation-menu";
import logoWhite from "@/assets/logo-white.png";
import { Menu, X } from "lucide-react";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow px-4 py-2 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg text-primary flex items-center gap-2">
        <img src={logoWhite} alt="Logo" className="block dark:hidden h-12" />
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
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-white dark:bg-gray-900 w-64 h-full shadow-lg p-6 flex flex-col">
            <button
              className="absolute top-4 right-4"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="mt-12 flex flex-col gap-4">
              <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              <Link to="/docs" onClick={() => setSidebarOpen(false)}>Docs</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 