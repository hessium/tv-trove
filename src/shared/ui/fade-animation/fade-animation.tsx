'use client';
import { motion, useInView } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

export const fadeUpVariant = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const fadeDownVariant = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const fadeLeftVariant = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const fadeRightVariant = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const scaleVariant = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 200
    }
  }
};

type AnimationVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale';

interface FadeAnimationProps extends PropsWithChildren {
  variant?: AnimationVariant;
  threshold?: number;
  triggerOnce?: boolean;
}

const variantsMap = {
  fadeUp: fadeUpVariant,
  fadeDown: fadeDownVariant,
  fadeLeft: fadeLeftVariant,
  fadeRight: fadeRightVariant,
  scale: scaleVariant
};

export const FadeAnimation = (
  {
    children,
    variant = 'fadeDown',
    threshold = 0.1,
    triggerOnce = false
  }: FadeAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: '0px 0px -50px 0px',
    amount: threshold
  });

  return (
    <motion.div
      ref={ref}
      variants={variantsMap[variant]}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      viewport={{ once: triggerOnce, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};