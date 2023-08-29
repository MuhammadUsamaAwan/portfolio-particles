import { type Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href: string;
  icon: keyof typeof Icons;
};
