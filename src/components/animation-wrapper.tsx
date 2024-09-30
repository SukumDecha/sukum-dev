"use client";

import { motion, AnimatePresence, Spring } from "framer-motion";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.2,
  stiffness: 80,
  damping: 10,
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function AnimationWrapper({ children }: IProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={transitionSpringPhysics}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
