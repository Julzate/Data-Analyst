import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white max-w-[1240px] w-full mx-auto grid lg:grid-cols-3 px-4 py-16'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='font-bold  text-2xl py-2 md:text-4xl sm:text-3xl'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col w-full items-center justify-between space-x-3 sm:flex-row'>
                <input type="email" placeholder='Enter your email' className='w-full rounded-md p-3 text-black' />
                <button className='w-[200px]  text-gray-500 font-bold bg-lightGreen rounded-md my-6 py-3 px-6 hover:text-white hover:scale-105 duration-300'>
                    Notify Me
                </button>
            </div>
            <p>We care about the protection of your data. Read our <span className='text-lightGreen'>Privacy Policy</span></p>
        </div>        
    </div>
  )
}

export default Newsletter