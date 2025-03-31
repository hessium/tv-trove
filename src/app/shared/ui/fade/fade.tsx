import { forwardRef, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ComponentProps } from 'react';

interface FadeProps extends ComponentProps<typeof motion.div> {
  hidden: boolean;
  isPending?: boolean;
  skeleton?: ReactNode;
}

const DefaultSkeleton = () => (
  <motion.div
    className='h-32 w-full animate-pulse bg-gray-200 rounded-lg'
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  />
);

const Fade = forwardRef<HTMLDivElement, FadeProps>(
  ({ hidden, isPending, skeleton, ...props }, forwardedRef) => (
    <AnimatePresence mode='wait'>
      {!hidden && (
        <motion.div
          key='content-wrapper'
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {isPending ? (
            <motion.div
              key='skeleton'
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {skeleton || <DefaultSkeleton />}
            </motion.div>
          ) : (
            <motion.div
              key='content'
              ref={forwardedRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              {...props}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  ),
);

Fade.displayName = 'Fade';

export { Fade };
