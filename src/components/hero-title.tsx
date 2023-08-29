'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/animationVariants';

export default function HeroTitle() {
  return (
    <motion.h1
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='mb-8 text-[35px] font-semibold leading-tight md:text-[60px] md:leading-[1.3]'
    >
      Transforming Ideas <br /> Into <span className='text-accent'>Digital Reality</span>
    </motion.h1>
  );
}
