import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className = '' } = props;

  const { t } = useTranslation('navbar');

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsAuthModal(!isAuthModal);
  };

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button variant="clearInverted" size="m" className={cls.links} onClick={handleModalToggle}>
        {t('signIn')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {t('lorem')}
      </Modal>
    </div>
  );
};
