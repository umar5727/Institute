// Carousel.js

import React, { useEffect, useState, useCallback } from "react";

import H3 from "../heading/H3";
import Product from "../cards/Product";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlider, setAutoSlider] = useState(true);
  const [duration, setDuration] = useState("duration-500");
  const items = [
    {
      name: "JavaScript: Full first",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      
      // price: 19.99,

      difficulty: "Beginner",
      category: "Development",
      time: "3h",
      lectures: 15,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full second",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full third",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full fourth",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "fourth",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full fifth",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full sixth",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full first",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      
      // price: 19.99,

      difficulty: "Beginner",
      category: "Development",
      time: "3h",
      lectures: 15,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full second",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full third",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "4h",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    {
      name: "JavaScript: Full fourth",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
     
      // price: 19.99,

      difficulty: "Beginner",
      category: "Design",
      time: "fourth",
      lectures: 25,
      price: 300,
      mentors: "Umar Khan",
    },
    // {
    //   heading: "second",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "third",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "fourth",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "five",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "sixth",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // { heading: "first", image: "/self-without-bg.png" },
    // {
    //   heading: "second",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "third",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
    // {
    //   heading: "fourth",
    //   image:
    //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    // },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
  };

  const stopAutoSlider = () => {
    setAutoSlider(false);
  };
  const startAutoSlider = () => {
    setAutoSlider(true);
  };

  useEffect(() => {
    let slider;
    let delay = 1000;
    if (currentIndex === 6 || currentIndex === 0) {
      // console.log(currentIndex)
      // setAutoSlider(false)
      setDuration("duration-0");
      delay = 0;
      // setAutoSlider(true)
    } else {
      setDuration("duration-500");
      delay = 1000;
    }
    if (autoSlider) {
      slider = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % 7);
        console.log(currentIndex)
      }, delay);
    }

    return () => {
      clearInterval(slider);
    };
  }, [autoSlider, currentIndex]);
  return (
    <div
      onMouseEnter={stopAutoSlider}
      onMouseLeave={startAutoSlider}
      className="max-w-full mx-auto relative"
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className={`flex transition-transform ${duration} ease-in-out transform`}
          style={{ transform: `translateX(${-currentIndex * 33.33}%) ` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-2/6 px-3 flex-shrink-0 ">
              <Product name={item.name} category={item.category} difficulty={item.difficulty} image={item.image} lectures={item.lectures} mentors={item.mentors} price={item.price} time={item.time}  />
            </div>
          ))}
        </div>
      </div>
      {/*            
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8249;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8250;
      </button> */}
    </div>
  );
};

export default Carousel;
