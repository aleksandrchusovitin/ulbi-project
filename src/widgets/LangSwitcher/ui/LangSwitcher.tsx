import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';

interface ILangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className = '', isShort = false } = props;
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button variant="clear" className={classNames('', {}, [className])} onClick={handleLanguageToggle}>
      {t(isShort ? 'languageShort' : 'language')}
    </Button>
  );
};
