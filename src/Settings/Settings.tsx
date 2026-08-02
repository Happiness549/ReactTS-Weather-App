import React from 'react'
import { Card } from '../components/ui/Card'
import { Text } from '../components/ui/Text'
import { Settings as SettingsIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Settings = () => {
  return (
    <Card className=' w-90 h-40 p-2 -mt-6 bg-[#343A46]'>
      
      <div className='flex gap-2'>
        <SettingsIcon/>
        <Text variant={'h1'}>Settings</Text>
      </div>
      <div className='flex gap-2'>
          <Button text={'\u00B0C'} />
          <Button text={'\u00B0F'} className='bg-white'/>
      </div>
      <Text variant={'h1'}>Theme</Text>
      <div className='flex gap-2'>
         <Button text={'Light'} />
         <Button text={'Dark'} /> 
      </div>
         
    </Card>
  )
}
