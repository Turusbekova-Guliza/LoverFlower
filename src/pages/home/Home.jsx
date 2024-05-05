import React from 'react'
import './Home.scss'
import Hero from '../../components/Hero/Hero'
import Catalog from '../../components/Catalog/Catalog'

function Home() {
  return (
    <div className='home-container'>
      <Hero/>
      <Catalog/>
    </div>
  )
}

export default Home