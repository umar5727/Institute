import { faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NumberDisplay from './NumberDisplay'

const SmallCard = (
    {bg, imgColor}
) => {
  return (
    <div className={`flex ${bg} w-80 h-24 rounded-lg`}>
        <div className='w-2/5 flex justify-center items-center'>
            <FontAwesomeIcon icon={faTv} className={`${imgColor} text-6xl`}/>
        </div>
        <div className='w-3/5 ps-2 text-primary-text-heading font-semibold flex justify-center flex-col text-lg dark:text-white'>
          <div className="flex ">
            <NumberDisplay number='10' increment={1} speed={100}/>
            <span>K</span>

          </div>
            <p>Online Courses</p>
        </div>
    </div>
  )
}

export default SmallCard