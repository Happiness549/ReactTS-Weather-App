import React from 'react'
import { Card } from '../ui/Card'
import { Text } from '../ui/Text'
import { Umbrella } from 'lucide-react'
import { Button } from '../ui/Button'

export const WeatherAlerts = () => {
  return (
    <Card className=' w-90 h-60 bg-[#343A46]'>
        <div className=' w-80 h-50 p-2 rounded-2xl bg-red-100'>
              <Text variant={'h1'} ><Umbrella className='w-15 h-15'/>Stay ahead of the storm</Text>
                  <Text variant={'p'} >Enable notifications for server weather alerts</Text>
                  <Button text={'Enable Alerts'} />
        </div>
      

    </Card>
  )
}
