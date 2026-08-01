import React, { type ReactNode } from 'react'

interface CardProps{
  children: ReactNode;
  className?: string;
}

export const Card : React.FC<CardProps> = ({children,className}) => {
  return (
    <div className={`rounded-3xl bg-white p-6 shadow-lg ${className}`}>
        {children}
        
    </div>
  )
}
