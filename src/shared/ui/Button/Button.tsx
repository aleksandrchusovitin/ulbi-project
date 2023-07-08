import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'background' | 'backgroundInverted';
export type ButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  isSquare?: boolean;
  size?: ButtonSize;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className = '', children, variant = 'outline', isSquare = false, size = 'l', ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: isSquare,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[variant], cls[size]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
