import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000080] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

                <div>
             </div>
             </div>

             <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Ricky(Zirui) Li, nice to meet you. Feel free to take a look around my website.</p>
                </div>
                <div>
                    <p>I am interested in building full-stack web applications that can largely impact the success
                        of businesses and make people's lives easier. I also 
                     love to conduct research in the fields of artificial intelligence, machine learning, and 
                        software engineering. My other hobbies include playing basketball, 
                        swimming, and listening to music. Please don't hesitate if you want to 
                        reach out to me regarding anything!
                    </p>

             </div>
                
   
            </div>
        </div>


    </div>
  )
}

export default About