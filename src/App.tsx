import { useState } from 'react'
import './App.css'
import { Container } from "./components/ui/Container";
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen  py-10'>
        <Container>
          <h1 className='text-4xl font-bold'>SkyWeather</h1>

        </Container>
        <Card>
          <p className='mt-2 text-slate-500 font-bold text-slate-800'>Welcome to my beautiful App</p>
        </Card>
        <Button>
          Serch Weather
        </Button>
        
      </div>
    </>
  )
}

export default App
