import { FC, useMemo, useState } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? 'light';

interface IThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FC<IThemeProviderProps> = (props) => {
  const { children, initialTheme = defaultTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
