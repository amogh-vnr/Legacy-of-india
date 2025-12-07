import React, { createContext, useContext, useState } from 'react';
import clsx from 'clsx';

const TabsContext = createContext();

export function Tabs({ defaultValue, children, className = '' }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }) {
  return <div className={clsx('flex gap-2 border-b-2 border-[#D4AF37]/20', className)}>{children}</div>;
}

export function TabsTrigger({ value, children, className = '' }) {
  const ctx = useContext(TabsContext);
  const isActive = ctx.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={clsx(
        'px-6 py-3 text-sm font-semibold border-b-4 transition-all duration-200',
        isActive 
          ? 'border-[#D4AF37] text-[#4E342E] bg-[#D4AF37]/10' 
          : 'border-transparent text-[#4E342E]/60 hover:text-[#4E342E] hover:bg-[#D4AF37]/5',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = '' }) {
  const ctx = useContext(TabsContext);
  if (ctx.value !== value) return null;
  return <div className={clsx('py-6', className)}>{children}</div>;
}
