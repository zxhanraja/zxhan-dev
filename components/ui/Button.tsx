import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 shadow-sm",
    secondary: "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800",
    outline: "border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white",
    ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs rounded-xl",
    md: "h-11 px-5 py-2 text-sm rounded-xl",
    lg: "h-13 px-8 text-base rounded-2xl"
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;