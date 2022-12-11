import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1240px] text-white flex justify-between mx-auto h-24 px-4 items-center">
      <h1 className="text-4xl font-bold text-lightGreen">React</h1>
      <ul className="hidden text-xl md:flex">
        <li className="text-white p-4 cursor-pointer hover:underline">Home</li>
        <li className="text-white p-4 cursor-pointer hover:underline">Company</li>
        <li className="text-white p-4 cursor-pointer hover:underline">Resources</li>
        <li className="text-white p-4 cursor-pointer hover:underline">About</li>
        <li className="text-white p-4 cursor-pointer hover:underline">Contact</li>
      </ul>
      {/* Mobile Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div className={nav ? "fixed h-full w-[50%] border-r border-gray-800 top-0 left-0 bg-black  ease-in-out duration-500 " :"fixed left-[-100%] "}>
      <h1 className=" w-full text-4xl font-bold text-lightGreen m-4">React</h1>
        <ul className="px-1 uppercase">
          <li className="p-4 border-b border-gray-800">Home</li>
          <li className="p-4 border-b border-gray-800">Company</li>
          <li className="p-4 border-b border-gray-800">Resources</li>
          <li className="p-4 border-b border-gray-800">About</li>
          <li className="p-4 border-b border-gray-800">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
