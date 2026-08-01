import React, { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface CardProps{
  children: ReactNode;
  className?: string;
}

export const Card : React.FC<CardProps> = ({children,className}) => {
  return (
    <div className={twMerge('rounded-3xl bg-white p-6 shadow-lg', className )}>
        {children}
        
    </div>
  )
}
