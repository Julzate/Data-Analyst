import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto' />
            <div className='flex flex-col justify-center  mt-2 md:mt-0'>
                <p className='text-lightGreen uppercase font-bold text-xl '>Data Analytics Dashboard</p>
                <h1 className='font-bold text-black text-4xl py-2'>Manage Data Analytics Centrally </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid est, omnis ad numquam vel sunt libero, debitis vitae quam asperiores esse voluptatem excepturi, doloribus doloremque quas dolorem! Iusto, earum deserunt.</p>
                <button className='w-[200px] mx-auto text-lightGreen font-bold bg-black rounded-md my-6 py-4 md:mx-0 hover:text-white hover:scale-105 duration-300'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics