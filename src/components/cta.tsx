'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/animationVariants';
import { Icons } from '@/components/icons';

export default function CTA() {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex justify-center xl:justify-start'
    >
      <div className='mx-auto xl:mx-0'>
        <Link
          href='/work'
          className='group relative flex h-[185px] w-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat'
        >
          <Image
            src='/rounded-text.png'
            width={141}
            height={148}
            alt='My work'
            className='h-full max-h-[148px] w-full max-w-[141px] animate-spin-slow'
          />
          <Icons.rightArrow className='absolute text-4xl transition-all duration-300 group-hover:translate-x-2' />
        </Link>
      </div>
    </motion.div>
  );
}
