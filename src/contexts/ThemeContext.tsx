import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const saved = window.localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(event.matches);
      }
    };

    const query = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    }

    // Fallback for older browsers
    query.addListener(listener);
    return () => query.removeListener(listener);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
