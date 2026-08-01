import React, { type ReactNode } from 'react'

interface CardProps{
  children: ReactNode;
}

export const Card:React.FC<CardProps> = ({children}) => {
  return (
    <div className='rounded=3xl bg-white p-6 shadow-lg'>
        {children}
    </div>
  )
}
