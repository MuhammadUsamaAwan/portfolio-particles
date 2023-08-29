import Avatar from '@/components/avatar';
import CTA from '@/components/cta';
import HeroSubtitle from '@/components/hero-subtitle';
import HeroTitle from '@/components/hero-title';

export default function Home() {
  return (
    <div className='h-full bg-primary/60'>
      <div className='h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left'>
          <HeroTitle />
          <HeroSubtitle />
          <CTA />
        </div>
      </div>
      <div className='absolute bottom-0 right-0 h-full w-[1200px]'>
        <div className='absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat'></div>

        <div>particles</div>
        <Avatar />
      </div>
    </div>
  );
}
