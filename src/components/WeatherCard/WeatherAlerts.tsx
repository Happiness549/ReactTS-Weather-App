import React from 'react'
import { Card } from '../ui/Card'
import { Text } from '../ui/Text'
import { Umbrella } from 'lucide-react'
import { Button } from '../ui/Button'

export const WeatherAlerts = () => {
  return (
    <Card className=' mt-5 w-180 h-60'>
        <div className='bg-red-100 w-170 h-50 p-5'>
              <Text variant={'h1'} ><Umbrella className='w-15 h-15'/>Stay ahead of the storm</Text>
                  <Text variant={'p'} >Enable notifications for server weather alerts</Text>
                  <Button text={'Enable Alerts'} />
        </div>
      

    </Card>
  )
}
