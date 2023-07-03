import { useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ThemeButton } from 'shared/ui';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      <ThemeIcon className={classNames(null, {}, [cls[theme]])} />
    </Button>
  );
};
