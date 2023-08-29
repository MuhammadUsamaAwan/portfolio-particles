'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/animationVariants';

export function Avatar() {
  return (
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]'
    >
      <div className='hidden xl:flex xl:max-w-none'>
        <Image src='/avatar.png' width={737} height={678} alt='avatar' className='h-full w-full' />
      </div>
    </motion.div>
  );
}
