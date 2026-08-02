import React from 'react'
import type { ReactNode } from 'react'
import { Text } from './Text'

interface ContainerProps{
  children : ReactNode;
}

export const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='mx-auto w-full max-w-7x1 px-4 sm:px-6 lg:px-8 bg-black'>
    {children}
      </div>
  )
}
