import React from 'react'
import { Card } from '../ui/Card'
import { Text } from '../ui/Text'
import { Umbrella } from 'lucide-react'
import { Button } from '../ui/Button'

export const WeatherAlerts = () => {
  return (
    <Card className=' w-90 h-50 bg-[#343A46] -mt-4 mb-2 p-1'>
        <div className=' w-80 h-50 p-2 rounded-2xl bg-black-200'>
          <Umbrella className='w-15 h-15'/>
              <Text variant={'h1'} className='text-white'>Stay ahead of the storm</Text>
                  <Text variant={'p'} className='text-white'>Enable notifications for server weather alerts</Text>
                  
                  <Button text='Enable Alerts'/>
        </div>
      

    </Card>
  )
}
