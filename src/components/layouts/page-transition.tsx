'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { transitionVariants } from '@/lib/animationVariants';

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <motion.div key={pathname} className='h-full'>
        <motion.div
          className='fixed inset-y-0 right-full z-30 h-screen w-screen bg-[#2e2257]'
          variants={transitionVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        />
        <motion.div
          className='fixed inset-y-0 right-full z-20 h-screen w-screen bg-[#2b2d71]'
          variants={transitionVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        />
        <motion.div
          className='fixed inset-y-0 right-full z-10 h-screen w-screen bg-[#4b3792]'
          variants={transitionVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
