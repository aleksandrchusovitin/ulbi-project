import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const handleThrowOn = () => setError(true);

  return (
    <Button onClick={handleThrowOn} className={classNames('', {}, [])}>
      {t('throwError')}
    </Button>
  );
};
