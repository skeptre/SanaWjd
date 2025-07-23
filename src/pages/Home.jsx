import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div>
          <Hero
          title="Sana Wajid"
          subtitle="Photographer based in Manchester"
          />
      </div>
    </div>
  )
}
export default Home
