// React
import { useRef } from 'react';

// Framer Motion
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  wrap,
} from 'framer-motion';

// Styles
import s from './Marquee.module.css';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export function Marquee({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(0, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={s.marquee}>
      <motion.div className={s.marquee__scroller} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
