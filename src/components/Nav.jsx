import React from 'react'
import { Link } from "react-scroll"

export default function Nav() {
  return (
    <nav className='fixed bg-[#e7eeee] z-10 w-full flex items-center justify-between py-6 px-10 border-b border-gray-300'>
      <div className='text-2xl font-bold'><Link to="home" smooth={true} duration={500}>The ARCH</Link></div>
      <ul className='flex items-center gap-18 font-medium [&>*]:cursor-pointer'>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        
        <li>
          <Link to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <button className='font-bold border border-gray-300 py-3 px-8 rounded-full'>
        Sign Up
      </button>
    </nav>
  )
}
