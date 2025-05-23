import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Font = 'sans' | 'serif' | 'mono';

interface ThemeContextType {
  theme: Theme;
  font: Font;
  setTheme: (theme: Theme) => void;
  setFont: (font: Font) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  font: 'sans',
  setTheme: () => {},
  setFont: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [font, setFont] = useState<Font>('sans');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedFont = localStorage.getItem('font') as Font;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    if (savedFont) {
      setFont(savedFont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('font', font);
    document.documentElement.classList.remove('font-sans', 'font-serif', 'font-mono');
    document.documentElement.classList.add(`font-${font}`);
  }, [font]);

  return (
    <ThemeContext.Provider value={{ theme, font, setTheme, setFont }}>
      <div className={`font-${font}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
