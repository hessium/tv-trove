'use client';
import cl from '@/app/containers/app-header/app-header.module.scss';
import { cn } from '@/app/shared/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/app/shared/ui/icon/icon';
import { AnyIconName } from '@/app/shared/ui/icon/icon';
import { LINKS } from '@/app/shared/constants/links';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigation__list}>
        {LINKS.map((nav, index) => (
          <li key={nav.pathname + index}>
            <Link
              className={cn(
                cl.navigation__link,
                pathname === nav.pathname ? cl.navigation__link_active : '',
              )}
              href={nav.pathname}
            >
              <Icon
                name={`common/${nav.icon}` as AnyIconName}
                width='24'
                height='24'
              />
              <span>{nav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
