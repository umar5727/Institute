// TwoColumnHero.js

import React from 'react';
import NumberDisplay from './NumberDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TwoColumnHero = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10">
      {/* Left Column */}
      <div className="md:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center md:text-left md:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary-text-heading dark:text-white">
        Explore Boundless Learning Anytime, Anywhere
        </h1>
        <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
        Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
        </p>
        {/* discription ends  */}
        <div className='flex gap-4'>
          <div className='flex gap-1 items-center'>
            <FontAwesomeIcon icon={faCheckCircle} className='dark:text-white' />
            <span className='text-primary-text-normal font-medium dark:text-primary-text-normal-dark'>Learn with experts</span>
          </div>
          <div className='flex gap-1 items-center'>
            <FontAwesomeIcon icon={faCheckCircle} className='dark:text-white' />
            <span className='text-primary-text-normal font-medium dark:text-primary-text-normal-dark'>Get certificate</span>
          </div>

          <div className='flex gap-1 items-center'>
            <FontAwesomeIcon icon={faCheckCircle} className='dark:text-white' />
            <span className='text-primary-text-normal font-medium dark:text-primary-text-normal-dark'>Get membership</span>
          </div>
        </div>
        <button className=" bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 hover:text-white flex gap-2 ">
          Get Started
          <NumberDisplay number='99' />
        </button>
      </div>

      {/* Right Column - Full Image */}
      <div className="md:w-2/5 flex justify-center relative">
                <div className="relative  ">
      <figure className=" absolute -left-28 -bottom-12 figure z-0">
					{/* <svg width="550px" height="538px"  viewBox="0 0 554 544"  xml:space="preserve">
						<path class="fill-primary" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path>
					</svg> */}
          
                    <img src="/blob-haikei3.svg" alt="" className='w-full h-full z-0 relative'/>
				</figure>
                    <img src="/self-without-bg.png" alt="" className='mainImg rounded-b-full overflow-hidden  z-40 relative '/>
                </div>
      </div>
    </div>
  );
};

export default TwoColumnHero;
