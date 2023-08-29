'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/animationVariants';

export function HeroSubtitle() {
  return (
    <motion.p
      variants={fadeIn('down', 0.3)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl'
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto placeat praesentium voluptatibus animi
      doloribus magni incidunt rerum quidem voluptate libero adipisci quis deserunt aspernatur, iure maiores ipsum
      cupiditate a.
    </motion.p>
  );
}
