import React from 'react';
import clsx from 'clsx';

export function Checkbox({ checked, onCheckedChange, className = '', children, ...props }) {
  return (
    <label className={clsx('flex items-center gap-3 cursor-pointer', className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="w-5 h-5 rounded border-2 border-[#D4AF37] text-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 cursor-pointer"
        {...props}
      />
      {children && <span className="text-[#4E342E]">{children}</span>}
    </label>
  );
}
