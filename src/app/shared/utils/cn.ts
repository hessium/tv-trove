import { ClassValue, clsx } from 'clsx';

export function cn(...inputs: Array<ClassValue | undefined>) {
  return clsx(inputs);
}
