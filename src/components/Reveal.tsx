import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = '', delay = 0 }: PropsWithChildren<RevealProps>) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
