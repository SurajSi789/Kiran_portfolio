import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='text-[#e08210] hover:text-cyan-700 black-gradient_text'>KY</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/experience' className={({ isActive }) => isActive ? "text-[#e08210] bg-white py-2 px-3 rounded-md shadow-md" : "text-blue-600 hover:bg-white py-2 px-3 hover:rounded-md hover:shadow-md" }>
          Experience
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#e08210] bg-white py-2 px-3 rounded-md shadow-md" : "text-blue-600 hover:bg-white py-2 px-3 hover:rounded-md hover:shadow-md"}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar