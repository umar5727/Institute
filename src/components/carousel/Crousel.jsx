// Carousel.js

import React, { useEffect, useState, useCallback } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlider, setAutoSlider] = useState(true);
  const[duration, setDuration]=useState('duration-500');
  const images = [
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg', 
    '../../../public/sef-without-bg.png',
     'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
  ];

  const nextSlide = () => {
     
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const stopAutoSlider = ()=>{
    setAutoSlider(false);
  }
  const startAutoSlider = ()=>{
    setAutoSlider(true)
  }
//   const durations = useCallback(
//     () => {
      
//         if(currentIndex == 6 || currentIndex == 0){
//             setDuration = 'duration-0';
//         }else {
//             setDuration = 'duration-500';
//         }
//     },
//     [currentIndex],
//   )

  useEffect(()=>{
    let slider;
    if(currentIndex === 7 || currentIndex === 0){
        setAutoSlider(false)
        setDuration('duration-0');
        setAutoSlider(true)
        
    }else {
        setDuration('duration-500');
    }
    if(autoSlider){
        slider = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
            console.log(currentIndex)
        }, 1000);
    }
   
    return()=>{

        clearInterval(slider)
    }
    
  },[autoSlider,currentIndex, setCurrentIndex])
  return (
    <div 
    onMouseEnter={stopAutoSlider}
    onMouseLeave={startAutoSlider}
    className="max-w-3xl mx-auto relative"
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className={`flex transition-transform ${duration} ease-in-out transform`}
          style={{ transform: `translateX(${-currentIndex * 100}%) ` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8249;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
