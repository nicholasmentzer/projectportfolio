import React from 'react'
import Container from './Container'
import Title from './Title'
import Image from 'next/image'
import lehigh from "@/images/lehigh.png"
import avatar from "@/images/avatar.png"
import {BsPlayCircle} from 'react-icons/bs'
import Button from './Button'
import BackgroundDesign from './BackgroundDesign'

const Hero = () => {
  return (
    <section id="home" className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3'>
        <Container>
            <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
                <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                    <Title id="about" title="About Me" className='text-4xl'/>
                    <p className='mt-6 text-lg text-gray-600'>
                        Hello!! Thanks for visiting! I&apos;m Nick, a web/app developer with a passion for crafting captivating and enjoyable user interactions.
                    </p>
                    <p className='mt-6 text-lg text-gray-600'>
                        I graduated from Lehigh University with a Bachelor of Science degree in Computer Science & Engineering in just over 3 years and have nearly
                        two years of professional experience in developing web applications for
                        companies in sectors ranging from mental health applications to firearm
                        detection and control.
                    </p>
                    <div className='mt-8 flex flex-wrap items-center gap-x-6 gap-4'>
                        <Image src={lehigh} alt='lehighLogo' className='w-32 h-auto' />
                    </div>
                    <p className='mt-6 text-lg text-gray-600'>
                        Besides coding, I spend a lot of my time playing strategy video games (Fire Emblem, TFT, etc.) or discussing reality tv like Survivor!
                    </p>
                </div>
                <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
                    <BackgroundDesign className='absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0' />
                    <div>
                        {/*<Image src={avatar} alt='avatar' className='h-auto w-96 relative' />*/}
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero