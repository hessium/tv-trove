import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { Spinner } from '../spinner/spinner';
import './button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startContent,
  endContent,
  className = '',
  disabled,
  ref,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    className,
  ].join(' ');

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {startContent}
      {children}
      {endContent}
      {isLoading && (
        <div className="button__loading">
          <Spinner />
        </div>
      )}
    </button>
  );
}
