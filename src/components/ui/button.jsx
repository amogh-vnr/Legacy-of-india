import React from 'react';
import clsx from 'clsx';

export function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#4E342E] hover:shadow-lg hover:scale-105',
    secondary: 'bg-[#4E342E] text-[#FFF7E9] hover:bg-[#3E2C24]',
    outline: 'border-2 border-[#D4AF37] text-[#4E342E] hover:bg-[#D4AF37] hover:text-white'
  };
  
  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
