import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('navBar');

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('main')}
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('aboutUs')}
        </AppLink>
      </div>
    </div>
  );
};