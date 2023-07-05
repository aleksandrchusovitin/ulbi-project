import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = (props) => {
  const { className = '' } = props;

  const { t } = useTranslation('pageError');

  const handlePageReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('unknownError')}</p>
      <Button onClick={handlePageReload}>{t('updatePage')}</Button>
    </div>
  );
};
