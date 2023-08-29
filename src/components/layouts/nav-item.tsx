'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

type NavItemProps = {
  navItem: NavItem;
};

export function NavItem({ navItem }: NavItemProps) {
  const pathname = usePathname();

  const Icon = Icons[navItem.icon];

  return (
    <Link
      href={navItem.href}
      key={navItem.href}
      className={cn(
        'group relative flex items-center transition-all duration-300 hover:text-accent',
        pathname === navItem.href && 'text-accent'
      )}
    >
      <div className='absolute right-0 hidden pr-14 xl:group-hover:flex'>
        <div className='relative flex items-center rounded-[3px] bg-white p-[6px] text-primary'>
          <div className='text-xs font-semibold capitalize leading-none'>{navItem.title}</div>
          <div className='absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white'></div>
        </div>
      </div>
      <Icon />
    </Link>
  );
}
