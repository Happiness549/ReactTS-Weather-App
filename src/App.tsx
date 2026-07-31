import { useState } from 'react'
import './App.css'
import { Container } from "./components/ui/Container";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen  py-10'>
        <Container>
          <h1 className='text-4xl font-bold'>SkyWeather</h1>

        </Container>
        
      </div>
    </>
  )
}

export default App
