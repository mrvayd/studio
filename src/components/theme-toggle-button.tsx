
"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // This effect runs once on mount to set the initial theme
    // based on localStorage or the default from layout.tsx
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (storedTheme) {
      setCurrentTheme(storedTheme);
      root.classList.toggle('dark', storedTheme === 'dark');
      if (storedTheme === 'light' && root.classList.contains('dark')) {
        root.classList.remove('dark');
      } else if (storedTheme === 'dark' && !root.classList.contains('dark')) {
        root.classList.add('dark');
      }
    } else {
      // If no stored theme, rely on the initial class set in layout.tsx
      // and set the React state accordingly.
      const initialIsDark = root.classList.contains('dark');
      setCurrentTheme(initialIsDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) {
    // Render a placeholder to prevent hydration mismatch and layout shift
    return <div className="h-10 w-10" aria-hidden="true" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}
