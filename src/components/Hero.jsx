import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white max-w-[800px] mt-[-96px] w-full mx-auto flex flex-col text-center justify-center  h-screen '>
        <p className='text-lightGreen font-bold text-xl py-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl font-bold md:py-2 md:text-7xl sm:text-6xl'>Grow with data</h1>
        <div className='flex justify-center items-center py-1'>
        <p className='font-bold text-xl md:text-5xl sm:text-4xl'>fast, flexible financing for</p>
        <Typed
        className='font-bold text-xl px-2 md:text-5xl md:px-4 sm:text-4xl '
        strings={[
            "BTB",
            "BTC",
            "SASS"]}
            typeSpeed={130}
            backSpeed={150}
            loop
        />
        </div>
        <p className='text-gray-500 text-xl font-bold py-3 md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className='w-[200px] mx-auto text-gray-600 font-bold bg-lightGreen rounded-md my-6 py-4 hover:text-white hover:scale-105 duration-300'>
            Get Started
        </button>
    </div>
  )
}

export default Hero