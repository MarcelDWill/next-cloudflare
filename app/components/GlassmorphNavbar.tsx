"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// ✅ Updated navigation items
export const navigationItems = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/marcel-williams29414/",
  },
  {
    title: "GitHub",
    href: "https://github.com/MarcelDWill",
  },
  {
    title: "Contact Me",
    href: "mailto:mdwilliams326@gmail.com",
  },
];

export default function GlassmorphNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Automatically detect system dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // ✅ Toggle theme manually
  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-3 flex w-9/12 max-w-3xl -translate-x-1/2 flex-col items-center rounded-full bg-background/40 p-1.5 backdrop-blur-md md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/">
            <Image
              className="dark:invert transition-all duration-500"
              src="/L4.svg"
              alt="MD logo"
              width={36} // ✅ Smaller logo
              height={36}
            />
          </Link>

          {/* Desktop Navigation (Text Glows in Dark Mode) */}
          <div className="hidden gap-3 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-blue-300 dark:drop-shadow-[0_0_10px_rgba(0,150,255,0.8)] transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-1.5 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black shadow-md hover:scale-105 transition"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-white bg-gray-700 rounded-full text-sm"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-1 px-2 py-1 md:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-blue-300 dark:drop-shadow-[0_0_10px_rgba(0,150,255,0.8)] transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

