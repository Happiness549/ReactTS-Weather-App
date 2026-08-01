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
        <Container />
        <Card />
        <Button text={'Search Weather'}/>
        
        
        
      </div>
    </>
  )
}

export default App
