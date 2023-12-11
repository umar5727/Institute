import React from 'react'
import Profile from '../components/Profile'
import {Link} from "react-router-dom"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook } from '@fortawesome/free-solid-svg-icons'
// import Button from '../components/Button'
import {Button, Header, Tabs, ThemeToggle} from '../components'
const Home = () => {
  return (
    <div className=' dark:bg-boot-dark overflow-hidden'>Home

      {/* <Profile />
    
      <nav className='relative'>
        <div className="navwrapper w-full flex justify-between items-center">
        <Link to="/contact-us" className="logo w-36 flex gap-2">
          <FontAwesomeIcon icon={faBook} className='text-blue-600 w-8 h-auto'/>
          
          <h1 className='text-2xl font-semibold self-center font-serif whitespace-nowrap dark:text-white'>Institute</h1>
        </Link>
        {/* logo ends  

        <ul className=' absolute h-1 top-10 overflow-hidden w-full md:h-fit md:w-fit transition-ll duration-1000 ease-in-out hover:h-fit  md:static md:flex md:gap-5 bg-blue-300 text-black'>
          <li className='py-2 hover:bg-blue-600 hover:text-white cursor-pointer md:py-0'>home</li>
          <li className='py-2 hover:bg-blue-600 hover:text-white cursor-pointer md:py-0'>courses</li>
          <li className='py-2 hover:bg-blue-600 hover:text-white cursor-pointer md:py-0'>about </li>
          <li className='py-2 hover:bg-blue-600 hover:text-white cursor-pointer md:py-0'>contact</li>
        </ul>

        {/* navigation ends  

        <div className='flex gap-1 items-center'>

          <ThemeToggle />

          <Button className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-transparent' >
          
          <FontAwesomeIcon icon={faBars}   className='w-5 h-5'/>
          </Button>
          {/* nav button ends        
          
          <div className='flex justify-center items-center px-2 bg-blue-600'>
            profile
          </div>
        </div>
        </div>
      </nav>
    
    <div>
      <h1>tabs</h1>

    </div>
    <Tabs />

    <Header /> */}
    </div>
  )
}

export default Home