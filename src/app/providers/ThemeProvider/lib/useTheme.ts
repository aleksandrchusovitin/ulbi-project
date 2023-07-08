import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResult => {
  const { theme = 'light', setTheme = () => {} } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
