import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000080]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ricky Li</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a student at the University of Maryland majoring in Computer Science and minoring in Math.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>My interests lies in Full-stack development and Machine Learning. I'm currently seeking a software engineering
                internship opportunity for the upcoming fall, spring, or summer.
            </p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 hover'/>
                </span>
                
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home