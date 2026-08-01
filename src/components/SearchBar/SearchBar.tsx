import React from 'react'
import { Input } from '../ui/Input'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  return (
    <div>
        <Search/>
        <input type="text" 
          placeholder='Search for a city'
        />

    </div>
  )
}
