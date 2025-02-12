import React from 'react'
import Container from './Container'
import Title from './Title'
import { skillData } from '@/constants'

const Skills = () => {
  return (
    <section id='skills' aria-label="My skills and experience" className='py-20 sm:py-32'>
        <Container>
            <div className='max-w-2xl mx-auto sm:text-center'>
                <Title title='My Skillset' className='text-4xl' />
                <p className='mt-2 text-lg text-gray-600'>These are the skills and tools I have learned through my college, internship, and personal research experiences!</p>
            </div>
            <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-4"
        >
          {skillData.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border bg-gray-600 border-gray-200 hover:border-gray-300 p-8 group hover:bg-gray-800/95 duration-300"
            >
              <div className='flex justify-center'>
                <item.icon className="h-14 w-14" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white flex justify-center">
                {item.name}
              </h3>
            </li>
          ))}
        </ul>
        </Container>
    </section>
  )
}

export default Skills