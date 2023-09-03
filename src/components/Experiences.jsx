import React from 'react'

const Experiences = () => {
  return (
    <div name='experiences' className=' w-full  bg-[#000080] text-gray-300 h-[85rem]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experiences</p>
                </div>

                <div>
             </div>
             </div>

             <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-1xl font-bold'>
                    <p className='sm:text-right text-2xl text-[#8892b0]' >University of Maryland</p>
                    <p>Undergraduate Teaching Assistant</p>
                    <p>Aug 2022 - May 2023</p>
                </div>
                <div>
                    <ul>
                        <li>
                        • Assisted professor in grading exams and projects in CMSC132(Object-Oriented Programming 2) and CMSC216(Introduction to
Computer Systems).
                        </li>
                        <li>
                        • Led a discussion consisting of over 38 students and explained concepts to students such
                            as assembly language, memory management, Unix, and etc.
                        </li>
                        <li>
                        • Mentored students who need help with projects or understanding of lecture material through office hours and
improved student performance in course in class of over 500 students.
                        </li>
                    </ul>

             </div>

             <div className=' sm:text-right text-1.5xl font-bold'>
             <p className='sm:text-right text-2xl text-[#8892b0]' >Iribe Initiative for Diversity and Inclusion(I4C)</p>
             <p>Computing Instructor</p>
                    <p>June 2022 - Aug 2022</p>
                </div>
                <div className='h-90'>
                    <ul>
                        <li>
                        • Planned curriculums and taught lessons to students in I4C Summer Academy’s AI4ALL, CompSciConnect,
                            CreateTech, and JumpStart Computing camps. Fostered enthusiasm for young kids and sparked creativity through
                                effective lesson strategies.
                        </li>
                        <li>
                        • Attended training to gain knowledge about classroom engagement and management, co-teaching methods, effective
                                lesson strategies, and using various software.
                            
                        </li>
                        <li>
                        • Taught groups of high school and middle school students Scratch, Python, JavaScript, Wearable Tech, and Machine
                                Learning.
                            
                        </li>
                    </ul>
             </div>

           
                
   
            </div>

          
        </div>


    </div>
  )
}

export default Experiences;