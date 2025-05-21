'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-secondary hover:bg-secondary-dark text-white',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100',
  link: 'bg-transparent underline-offset-4 hover:underline text-primary dark:text-primary',
};

const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg',
  xl: 'h-14 px-8 text-xl',
};

const Button = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      href,
      disabled = false,
      animate = true,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
    const variantClasses = buttonVariants[variant] || buttonVariants.primary;
    const sizeClasses = buttonSizes[size] || buttonSizes.md;
    const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

    const buttonContent = (
      <span className="flex items-center justify-center">
        {children}
      </span>
    );

    if (href) {
      return (
        <Link href={href} className={allClasses} ref={ref} {...props}>
          {buttonContent}
        </Link>
      );
    }

    if (animate) {
      return (
        <motion.button
          className={allClasses}
          ref={ref}
          disabled={disabled}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button className={allClasses} ref={ref} disabled={disabled} {...props}>
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
