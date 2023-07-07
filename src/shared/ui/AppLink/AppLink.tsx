import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
