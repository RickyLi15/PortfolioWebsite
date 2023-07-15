import React from 'react'
import ROne from '../assets/ResumeProject1.jpg'
import RTwo from '../assets/ResumeProject2.jpg'
import RThree from '../assets/ResumeProject3.jpg'
import Comming from '../assets/CommingSoon.jpg'
import Prediction from '../assets/Prediction.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full mid:h-screen text-gray-300 bg-[#000080]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div 
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/*Grid item */}
          <div style={{backgroundImage: `url(${RTwo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                QuickTrack(React Fitness Tracker)


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="https://github.com/RickyLi15/QuickTrack">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>


          <div style={{backgroundImage: `url(${ROne})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                React Food Ordering App


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="https://github.com/RickyLi15/ReactFoodOrderingApp" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>


          <div style={{backgroundImage: `url(${RThree})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                NLP ChatBot


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="https://github.com/RickyLi15/AI-ChatBot-with-Natural-Language-Processing" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>


          <div style={{backgroundImage: `url(${Prediction})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl text-center font-bold text-white tracking-wider'>
                NBA MVP Prediction


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="https://rickyli15.github.io/" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Comming})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>


          <div style={{backgroundImage: `url(${Comming})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application


              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo Coming Soon!</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;