import React from 'react'
import { Card } from '../components/ui/Card'
import { Text } from '../components/ui/Text'
import { Settings as SettingsIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Settings = () => {
  return (
    <Card className='mt-5 w-180 h-60'>
      <Text variant={'h1'}><SettingsIcon/>Settings</Text>
      <div className='flex gap 2'>
        <Button text={'\u00B0C'} />
        <Button text={'\u00B0F'} className='bg-white'/>
      </div>
      <Text variant={'h1'}><SettingsIcon/>Theme</Text>
      <div className='flex'>
         <Button text={'Light'} />
         <Button text={'Dark'} /> 
      </div>
         
    </Card>
  )
}
