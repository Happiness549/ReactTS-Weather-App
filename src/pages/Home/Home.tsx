import React from 'react'
import {Container} from '../../components/ui/Container'
import { Navbar } from '../../components/Navbar/Navbar'
import {SearchBar} from '../../components/SearchBar/SearchBar'

export const Home = () => {
  return (
    <div className='min-h-screen bg-sky-100'>
        <Container>
            <Navbar/>
            <SearchBar/>

        </Container>
    </div>
  )
}
