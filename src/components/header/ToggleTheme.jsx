import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const ToggleTheme = () => {
  
  const [theme, setTheme]=useState(false);
  useEffect(() => {
    if(theme){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
     
  }, [theme])
  
  return (
    <div className='group w-10 h-10 rounded-lg flex justify-center items-center hover:bg-primary-light dark:hover:bg-primary-dark-hover cursor-pointer'
    onClick={()=>setTheme(!theme)}
    >
        {
            (theme)?
               <FontAwesomeIcon icon={faSun}  className='text-primary-grayText'/>
           

       
            :

                <FontAwesomeIcon icon={faMoon} className='text-gray-600 group-hover:text-black'/>
            
        }
    </div>
  )
}

export default ToggleTheme