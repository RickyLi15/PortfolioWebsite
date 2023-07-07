import React from 'react'


import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import Node from '../assets/node.png';



const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
      {/*Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the major technologies I've worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon"/>
            <p className='my-4'>Python </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
            <p className='my-4'>Java </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
            <p className='my-4'>React.js</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node icon"/>
            <p className='my-4'>Node.js</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="Firebase icon"/>
            <p className='my-4'>FireBase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon"/>
            <p className='my-4'>MongoDB</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills