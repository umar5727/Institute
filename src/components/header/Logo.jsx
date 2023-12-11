import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Logo = () => {
  return (
    <section className="cursor-pointer flex gap-2 items-center">
      <FontAwesomeIcon icon={faBook} className="text-primary text-3xl" 
      />
      
      <h1 className="font-bold text-2xl text-primarydark dark:text-white"
      >
        MyClass
      </h1>
    </section>
  );
};

export default Logo;
