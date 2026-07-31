import React from 'react'
import type { ReactNode } from 'react'

interface ContainerProps{
  children: ReactNode;
}

export const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='mx-auto w-full max-w-7x1 px-4 sm:px-6 lg:px-8'>
      {children}
    
      </div>
  )
}
