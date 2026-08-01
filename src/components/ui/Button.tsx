import React, { type ReactNode } from 'react'
import { Text } from './Text';

interface ButtonProps{
    text: string
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export const Button:React.FC<ButtonProps> = ({text, onClick, type,className}) => {
  return (
    <div>
        <button
        type={type}
        onClick={onClick}
        className={`
            px-6
            py-3
            rounded-xl
            bg-blue-400
            text-white
            font-semibold
            shadow-md
            hover:bg-blue-700
            transition
            duration-300
            cursor-pointer
            `}
        >
            {text}
        
        </button>   
    </div>
  )
}
