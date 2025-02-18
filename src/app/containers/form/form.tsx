import type { HTMLAttributes, ReactNode } from 'react';
import {
  type FieldValues,
  useFormContext,
  type UseFormReturn,
} from 'react-hook-form';

import { Button } from '@/shared/ui/button/button';

export interface FormPropsChildren extends UseFormReturn<FieldValues> {
  isValid: boolean;
  resetButton: ReactNode;
}

interface Form extends Omit<HTMLAttributes<HTMLFormElement>, 'children'> {
  children: (props: FormPropsChildren) => ReactNode;
}

export const Form = ({ children, ...props }: Form) => {
  const context = useFormContext();
  const isValid = !Object.values(context.formState.errors).length;
  const resetButton = (
    <Button
      className='h-8 text-sm md:h-12 md:text-base'
      variant='light'
      onClick={() => context.reset()}
    >
      Отменить
    </Button>
  );

  return (
    <form {...props}>
      {children({
        isValid,
        resetButton,
        ...context,
      })}
    </form>
  );
};
