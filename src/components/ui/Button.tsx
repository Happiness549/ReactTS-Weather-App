import React, { type ReactNode } from 'react'

interface ButtonProps{
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export const Button:React.FC<ButtonProps> = ({children, onClick, type,className}) => {
  return (
    <div>
        <button
        type={type}
        onClick={onClick}
        className={`
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            shadow-md
            hover:bg-blue-700
            transition
            duration-300
            cursor-pointer
            `}
        
        >
            {children}
        </button>
        
        
    </div>
  )
}
