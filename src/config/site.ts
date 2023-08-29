import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'Porfolio',
  description: 'This is a portfolio website for a web developer. It is built with React, Next.js, and TypeScript.',
  nav: [
    { title: 'home', href: '/', icon: 'home' },
    { title: 'about', href: '/about', icon: 'user' },
    { title: 'services', href: '/services', icon: 'rectangleGroup' },
    { title: 'work', href: '/work', icon: 'viewColoumns' },
    {
      title: 'testimonials',
      href: '/testimonials',
      icon: 'chat',
    },
    {
      title: 'contact',
      href: '/contact',
      icon: 'envelope',
    },
  ] satisfies NavItem[],
};
