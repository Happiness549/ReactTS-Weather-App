import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import { Map } from 'lucide-react'
import { Search } from 'lucide-react'

export const SavedLocations = () => {
  return (
    <Card className='w-195 bg-[#343A46]'>
        <div className='flex gap-140'>
             <Text variant={'h1'} className='text-white'>Saved Location</Text>
             <Search/>
        </div>
        <Map/>
        <Text variant={'p'} className='text-white'>No Saved locations yet</Text>
    </Card>
  )
}
