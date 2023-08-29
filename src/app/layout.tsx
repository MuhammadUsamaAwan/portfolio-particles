import { siteConfig } from '@/config/site';

import '@/styles/globals.css';

import type { Metadata } from 'next';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import TopLeftImage from '@/components/layouts/top-left-image';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <div className='h-screen bg-site bg-cover bg-no-repeat'>
          <TopLeftImage />
          {children}
        </div>
      </body>
    </html>
  );
}
