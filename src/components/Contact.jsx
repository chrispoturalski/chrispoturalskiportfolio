import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 p-4 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-0'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Please leave me a message and I will get back to you as soon as possible</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10"placeholder='Enter a message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-black px-6 py-3 my-8 mx-auto flex items center rounded-md hover:scale-110 duration-300'>Submit Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact