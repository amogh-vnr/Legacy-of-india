import React from 'react';
import clsx from 'clsx';

export function Label({ children, className = '', ...props }) {
  return (
    <label
      className={clsx(
        'block text-sm font-semibold text-[#4E342E] mb-2',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
