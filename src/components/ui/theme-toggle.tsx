"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const icons = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-yellow-500"
    >
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <g stroke="currentColor" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  ),
  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-gray-800 dark:text-yellow-400"
    >
      <path
        fill="currentColor"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      />
    </svg>
  ),
  system: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-blue-500"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
      <path d="M8 8h8v8H8z" fill="#fff" />
    </svg>
  ),
};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Toggle theme"
          className="rounded p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
        >
          <span className="relative block w-6 h-6">
            {/* Sun icon */}
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                resolvedTheme === "dark"
                  ? "scale-0 rotate-45 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            >
              {icons.light}
            </span>
            {/* Moon icon */}
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                resolvedTheme === "dark"
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-45 opacity-0"
              }`}
            >
              {icons.dark}
            </span>
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setTheme("light")}> 
          <span className="mr-2">{icons.light}</span> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}> 
          <span className="mr-2">{icons.dark}</span> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}> 
          <span className="mr-2">{icons.system}</span> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 