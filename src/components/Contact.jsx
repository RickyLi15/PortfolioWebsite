import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'> 
    <form method="POST" action="https://getform.io/f/6a88e28d-45dc-4b6d-b454-731f4a2d135d" className="flex flex-col max-w-[600px] w-full">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form if you want to get in touch or shoot me an email - rickyli6937@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email" required/>
        <textarea name="message" className="bg-[#ccd6f6] p-2" rows="10" placeholder="Message" required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
    </form>
    
    </div>
  )
}

export default Contact