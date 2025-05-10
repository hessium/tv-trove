import { useId } from 'react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { Controller, type RegisterOptions, useFormContext } from 'react-hook-form';
import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icon/icon';
import { Vld } from '@/shared/utils/form-validator';

import './input.scss';
import { cn } from '@/shared/utils/cn';

type BaseProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'onChange'
>;

export interface InputProps extends BaseProps {
  name: string;
  clearable?: boolean;
  endContent?: ReactNode;
  label?: ReactNode;
  onChange?: (name: string, value: string) => void;
  onClear?: () => void;
  rootClassName?: string;
  rules?: Vld | RegisterOptions;
  startContent?: ReactNode;
  wrapperClassName?: string;
}

export const Input = ({
                        name,
                        rules,
                        label,
                        clearable = true,
                        startContent,
                        endContent,
                        onClear,
                        onChange,
                        wrapperClassName,
                        rootClassName,
                        className,
                        ...props
                      }: InputProps) => {
  const { control } = useFormContext();
  const id = useId();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules instanceof Vld ? rules.build() : rules}
      render={({
                 field: { onChange: controlChangeValue, value = '', ref },
                 fieldState
               }) => {
        const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
          const currentValue = event.target.value;
          controlChangeValue(currentValue);
          onChange?.(name, currentValue);
        };

        const handleClear = () => {
          controlChangeValue('');
          onChange?.(name, '');
          onClear?.();
        };

        return (
          <div className={cn('input-root', rootClassName)}>
            {label && (
              <label
                className="input-label"
                htmlFor={props.id || id}
              >
                {label}
              </label>
            )}

            <div className={cn('input-wrapper', wrapperClassName)}>
              {startContent}

              <input
                ref={ref}
                id={props.id || id}
                className={cn(`input-field`, className)}
                {...props}
                value={value}
                onChange={onValueChange}
              />

              {endContent ||
                (clearable && (
                  <Button
                    disabled={!value.length}
                    variant="ghost"
                    className={cn('input-clear-button',
                      !value.length ? 'input-clear-button--invisible' : ''
                    )}
                    onClick={handleClear}
                  >
                    <Icon name="common/close" />
                  </Button>
                ))}
            </div>

            {fieldState.error?.message && (
              <span className="input-error">
                {fieldState.error?.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};