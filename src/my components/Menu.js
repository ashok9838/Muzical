import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className="bg-emerald-800 text-center space-y-5">
        
          <li className="border-b py-2">
          <Link
            className=" text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/"
          >
            Home
          </Link>
          </li>
          <li className="border-b py-2">
          <Link
            className="text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/about"
          >
            About
          </Link>
          </li>
          <li className="border-b py-2">
          <Link
            className="text-black-700 mx-4 text-2xl  text-[#E4F2E7] hover:text-[#93bfb7]"
            to='/blog'
          >
            Blog
          </Link>
          </li>
         
          <li className="border-b py-2">
          <Link
            className="text-black-700 mx-4 text-2xl   text-[#E4F2E7] hover:text-[#93bfb7]"
            to="/contact"
          >
            Contact
          </Link>
          </li>
        </ul>
    </div>
  )
}

export default Menu
