import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaGithubSquare
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='max-w-[1240px] w-full mx-auto px-4 py-10 grid lg:grid-cols-3 text-gray-300'>
        <div>
            <h1 className="text-4xl font-bold text-lightGreen">React</h1>
            <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
            <div className='md:w-[70%] my-6 flex justify-between '>
                <a href="/"> 
                    <FaFacebookSquare size={30} className="hover:text-white"/>
                </a>
                <a href="/"> 
                    <FaInstagramSquare size={30} className="hover:text-white"/>
                </a>
                <a href="/"> 
                    <FaTwitterSquare size={30} className="hover:text-white"/>
                </a>
                <a href="/"> 
                    <FaGithubSquare size={30} className="hover:text-white"/>
                </a>
                <a href="/"> 
                    <FaDribbbleSquare size={30} className="hover:text-white"/>
                </a>
            </div>
        </div> 
        <div className='flex justify-between mt-6 lg:col-span-2'>
           <div>
                <h2 className='pb-2 text-gray-400 font-bold'>Solutions</h2>
                <ul className='space-y-2'>
                    <li className='hover:underline hover:text-white cursor-pointer'>Analytics</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Marketing</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Commerce</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Insights</li>               
                </ul>
           </div>
           <div>
                <h2 className='pb-2 text-gray-400 font-bold'>Support</h2>
                <ul className='space-y-2'>
                    <li className='hover:underline hover:text-white cursor-pointer'>Pricing</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Documentation</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Guides</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Api Status</li>          
                </ul>
            </div>
            <div>
                <h2 className='pb-2 text-gray-400 font-bold'>Company</h2>
                <ul className='space-y-2'>
                    <li className='hover:underline hover:text-white cursor-pointer'>About</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Blog</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Jobs</li>              
                    <li className='hover:underline hover:text-white cursor-pointer'>Press</li>              
                    <li className='hover:underline hover:text-white cursor-pointer'>Careers</li>          
                </ul>
            </div>
             <div>
                <h2 className='pb-2 text-gray-400 font-bold'>Legal</h2>
                <ul className='space-y-2'>
                    <li className='hover:underline hover:text-white cursor-pointer'>Claim</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Policy</li>
                    <li className='hover:underline hover:text-white cursor-pointer'>Terms</li>              
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
