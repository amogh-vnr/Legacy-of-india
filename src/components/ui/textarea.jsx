import React from 'react';
import clsx from 'clsx';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={clsx(
        'w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 bg-white/50',
        'focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20',
        'text-[#4E342E] placeholder:text-[#4E342E]/50',
        'transition-all duration-200 resize-vertical min-h-[120px]',
        className
      )}
      {...props}
    />
  );
}
