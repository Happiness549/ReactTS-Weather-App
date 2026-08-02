import React from 'react'
import { Input } from '../ui/Input'
import { Search } from 'lucide-react'
import { Card } from '../ui/Card'


export const SearchBar = () => {
  const [value, setValue] = React.useState('')

  return (
    
    <div >
        <Card className='w-200 flex justify-center items-center mt-10 h-16'>
            
            <div className='flex bg-sky-100 rounded-2xl p-3 w-2/3 ml-100 gap-4'>
                 <Search/>
                 <Input
                    type='text'
                    placeholder='Search for a city'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
            </div>
        </Card>
    </div>
  )
}
