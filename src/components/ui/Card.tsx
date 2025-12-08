import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'pink' | 'purple' | 'blue' | 'none';
  padding?: 'sm' | 'md' | 'lg';
}

const glowClasses = {
  pink: 'hover:shadow-lg hover:shadow-pink-500/20',
  purple: 'hover:shadow-lg hover:shadow-purple-500/20',
  blue: 'hover:shadow-lg hover:shadow-blue-500/20',
  none: '',
};

const paddingClasses = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-10',
};

export default function Card({
  children,
  className = '',
  hover = true,
  glow = 'pink',
  padding = 'md',
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        glass rounded-2xl transition-all duration-300
        ${paddingClasses[padding]}
        ${glowClasses[glow]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

