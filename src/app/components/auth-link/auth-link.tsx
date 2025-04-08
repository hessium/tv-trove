import Link from 'next/link';
import { Icon } from '@/shared/ui/icon/icon';
import { LINKS } from '@/shared/constants/links';

export const AuthLink = () => {
  const isAuthenticated = false;

  return (
    <Link href={isAuthenticated ? LINKS.profile : LINKS.auth}>
      {isAuthenticated ? (
        <span>Имя</span>
      ) : (
        <Icon
          name='common/logout'
          width='24'
          height='24'
        />
      )}
    </Link>
  );
};
