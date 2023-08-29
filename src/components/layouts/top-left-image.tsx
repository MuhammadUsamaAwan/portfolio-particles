import Image from 'next/image';

import topLeftImg from '../../../public/top-left.png';

export function TopLeftImage() {
  return (
    <div className='absolute left-0 top-0 z-10 opacity-80 mix-blend-color-dodge'>
      <Image
        src={topLeftImg}
        width={400}
        height={394}
        alt='Top Left Image'
        priority
        sizes='(min-width: 1200px) 400px, 200px'
      />
    </div>
  );
}
