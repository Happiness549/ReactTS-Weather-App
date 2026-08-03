import React from 'react'
import { Card } from '../components/ui/Card'
import { Text } from '../components/ui/Text'
import { Settings as SettingsIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Settings = () => {
  return (
    <Card className=' w-90 h-48 p-2 -mt-6 bg-[#343A46]'>
      
      <div className='flex gap-2 mb-2'>
        <SettingsIcon className='text-black'/>
        <Text variant={'h1'} className='text-white'>Settings</Text>
      </div>

       <Text variant={'p'} className='text-white'>Units</Text>
      <div className='flex gap-2 mb-2'>
          <Button text={'\u00B0C'} className='h-10 w-18 rounded-3xl'/>
          <Button text={'\u00B0F'} className='h-10 w-18 rounded-3xl'/>
      </div>

      <Text variant={'h1'} className='text-white'>Theme</Text>
      <div className='flex gap-2 mb-2'>
         <Button text={'Light'} className='h-10 w-18 rounded-3xl'/>
         <Button text={'Dark'} className='h-10 w-18 rounded-3xl'/> 
      </div>
         
    </Card>
  )
}
