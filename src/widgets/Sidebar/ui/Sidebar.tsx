import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLink, Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/list.svg';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className = '' } = props;

  const { t } = useTranslation('sidebar');

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <Button
        variant="backgroundInverted"
        className={cls.collapsedBtn}
        data-testid="sidebar-toggle"
        type="button"
        onClick={handleToggle}
        isSquare
        size="l"
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink className={cls.link} variant="secondary" to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.linkText}>{t('main')}</span>
          </AppLink>
        </div>

        <div className={cls.item}>
          <AppLink className={cls.link} variant="secondary" to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.linkText}>{t('aboutUs')}</span>
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
};
