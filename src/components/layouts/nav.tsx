import { siteConfig } from '@/config/site';
import { NavItem } from '@/components/layouts/nav-item';

export function Nav() {
  return (
    <nav className='fixed inset-y-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center'>
      <div className='flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl'>
        {siteConfig.nav.map(navItem => (
          <NavItem key={navItem.title} navItem={navItem} />
        ))}
      </div>
    </nav>
  );
}
