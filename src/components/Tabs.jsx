import React, { useState } from "react";
import Button from "./Button";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const tabInfo = [
    { title: "Tab1", content: "first tabs" },
    { title: "Tab2", content: "second tabs" },
    { title: "Tab3", content: "third tabs" },
    { title: "Tab4", content: "fourth tabs" },
  ];
  const handleClick = (index) => {
    setTabState(index);
    console.log(index);
  };
  return (
    <>
      <div className={`flex justify-between w-96 bg-primarydark`}>
        {tabInfo.map((item, index) => (
          <Button
            className={
              index === tabState
                ? "px-11 bg-blue-600 hover:bg-blue-600"
                : "px-11 bg-gray-600 bg-transparent"
            }
            key={index}
            onClick={ 
              () => handleClick(index)
            
            }
          >
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
      <div className="rounded-lg bg-white h-96 p-4 w-96">
        {tabInfo.map((item, index) => {
          if (index === tabState) {
            return (
              <div
                className="bg-orange-400 rounded-lg w-full h-full p-2 text-red-950"
                key={index}
              >
                {item.content}
              </div>
            );
          }
          {
            /* else{console.log(index)}
          index === tabState ? <h1 className="text-black" key={index}>display {index}</h1> : <h1 className="text-black">{item.content}</h1> */
          }
        })}
      </div>
    </>
  );
};

export default Tabs;
