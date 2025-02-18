import Image from 'next/image';
import Link from 'next/link';

export const AppHeader = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link href='/'>
          <Image
            src='/images/logo/logo.svg'
            width={44}
            height={44}
            alt='logo tv'
          />
        </Link>
      </div>
    </header>
  );
};
