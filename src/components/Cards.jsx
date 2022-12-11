import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-3 '>
          <div className='w-full my-8 shadow-xl rounded-lg p-4 flex flex-col text-center hover:scale-105 duration-300'>
              <img src={Single} alt="Single User" className='w-20 mx-auto -mt-[3rem]'/>
              <h1 className='font-bold text-xl my-6'>Single User</h1>
              <p className='font-bold text-4xl'>$149</p>
              <div className='font-medium'>
                  <p className='border-b p-2 mx-8 mt-5'>500 GB Storage</p>
                  <p className='border-b p-2 mx-8'>1 User Allowed</p>
                  <p className='border-b p-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className="w-[200px] mx-auto text-black font-bold bg-lightGreen rounded-md my-6 py-4 hover:text-white">
                  Start Trial
              </button>
          </div>
          <div className='w-full my-8  shadow-xl rounded-lg p-4 flex flex-col text-center bg-gray-100 md:m-0 hover:scale-105 duration-300'>
              <img src={Double} alt="Partnership" className='w-20 mx-auto -mt-[3rem]'/>
              <h1 className='font-bold text-xl my-6'>Partnership</h1>
              <p className='font-bold text-4xl'>$199</p>
              <div className='font-medium'>
                  <p className='border-b p-2 mx-8 mt-4'>500 GB Storage</p>
                  <p className='border-b p-2 mx-8'>1 User Allowed</p>
                  <p className='border-b p-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className="w-[200px] mx-auto text-lightGreen font-bold bg-black rounded-md my-6 py-4 hover:text-white">
                  Start Trial
              </button>
          </div>
          <div className='w-full my-8 shadow-xl rounded-lg p-4 flex flex-col text-center hover:scale-105 duration-300'>
              <img src={Triple} alt="Group Account" className='w-20 mx-auto -mt-[3rem]'/>
              <h1 className='font-bold text-xl my-6'>Group Account</h1>
              <p className='font-bold text-4xl'>299</p>
              <div className='font-medium'>
                  <p className='border-b p-2 mx-8 mt-4'>500 GB Storage</p>
                  <p className='border-b p-2 mx-8'>1 User Allowed</p>
                  <p className='border-b p-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className="w-[200px] mx-auto text-black font-bold bg-lightGreen rounded-md my-6 py-4 hover:text-white">
                  Start Trial
              </button>
          </div>
      </div>
    </div>
  )
}

export default Cards