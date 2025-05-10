'use client'

import Link from 'next/link';
import { FormProvider } from 'react-hook-form';
import { Form } from '@/app/containers/form/form';
import { useAuthPage } from '@/shared/hooks/pages/use-auth-page';
import { Button } from '@/shared/ui/button/button';
import { LINKS } from '@/shared/constants/links';
import { vld } from '@/shared/utils/form-validator';
import { Input } from '@/shared/ui/input/input';
import { REGEXP } from '@/shared/constants/regex';
import { MainSection } from '@/app/containers/main-section/main-section';
import { FadeAnimation } from '@/shared/ui/fade-animation/fade-animation';


export default function Page() {
  const { methods, mutation,  onSubmit } = useAuthPage();

  return (
   <FadeAnimation>
     <MainSection>
       <FormProvider {...methods}>
         <Form
           onSubmit={methods.handleSubmit(onSubmit)}
         >
           {() => (
             <>
               <h1 className='title'>
                 Авторизация
               </h1>

               <Input
                 label='Почта'
                 name='username'
                 placeholder='Введите почту'
                 rules={vld().required('Почта').pattern(REGEXP.email)}
               />

               <Input
                 label='Пароль'
                 name='password'
                 placeholder='Введите пароль'
                 rules={vld().required('Пароль').minLength(6)}
                 type='password'
               />

               <div className='form__footer'>
                 <Button
                   disabled={mutation.isPending}
                   variant='ghost'
                 >
                   <Link href={LINKS.registration}>Зарегистрироваться</Link>
                 </Button>

                 <Button
                   isLoading={mutation.isPending}
                   type='submit'
                 >
                   Войти
                 </Button>
               </div>
             </>
           )}
         </Form>
       </FormProvider>
     </MainSection>
   </FadeAnimation>
  )
}

