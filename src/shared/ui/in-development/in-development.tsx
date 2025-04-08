'use client';

import { cn } from '@/shared/utils/cn';

import  './in-development.scss';

interface InDevelopmentProps {
  className?: string;
}

export const InDevelopment = ({ className }: InDevelopmentProps) => (
  <div className={cn('inDevelopment', className)}>
    <h2 className={'inDevelopment__title'}>Раздел в разработке</h2>
    <p className={'inDevelopment__text'}>
      Мы работаем над этим разделом. Скоро здесь появится что-то интересное!
    </p>
  </div>
); 