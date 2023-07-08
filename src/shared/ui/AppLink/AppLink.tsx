import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'secondary';

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className = '', children, to, variant = 'primary', ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[variant]])} {...otherProps}>
      {children}
    </Link>
  );
};
