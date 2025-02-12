import React from 'react'
import Title from './Title'
import Container from './Container'
import DesktopView, { MobileView } from './DesktopView'

const Feature = () => {
  return (
    <section id="projects" aria-label="My Projects" className="bg-amber-900 py-20 sm:py-32">
        <Container>
            <div>
                <Title title="My Projects" className='text-white text-4xl'/>
                <p className='mt-2 text-lg text-gray-400'>Here are just a few examples of my work as a full-time web/app
                developer and as a development intern and Lehigh University
                student.</p>
            </div>
        </Container>
        {/*Desktop*/}
        <div className='hidden md:mt-20 md:block max-w-screen-xl mx-auto'>
            <DesktopView />
        </div>
        {/*Mobile*/}
        <div className='mt-16 md:hidden'>
          <MobileView />
        </div>
    </section>
  )
}

export default Feature