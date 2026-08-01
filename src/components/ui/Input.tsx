import React, { type ChangeEvent } from 'react'
interface InputProps{
    type: string;
    placeholder: string;
    value: string;
    onChange:(e: ChangeEvent<HTMLInputElement>) => void;
    
}

export const Input:React.FC<InputProps> = ({type, placeholder, value, onChange}) => {
  return (
    <div>
        <input 
          type= {type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full bg-transparent outline-none'
        />

    </div>
  )
}
