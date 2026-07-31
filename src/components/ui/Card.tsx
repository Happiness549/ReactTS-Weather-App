import React, { type ReactNode } from 'react'
import { Text } from '../Text/Text'
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
