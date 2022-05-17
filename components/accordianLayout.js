import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useState } from 'react/cjs/react.production.min';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
  if(activeIndex!==index){
    setActiveIndex(index)
  }
  else{
    setActiveIndex(null)
  }}
  ;


  return (
    <>
    
        <div onClick={() => handleSetIndex(index)}
         className={`cursor-pointer	flex w-1/2 justify-between p-2 mt-2 rounded bg-black             A flat-rate subscription service that allows you to request as many tasks as you want. Once a task is complete, we move onto the next one in the queue.    </div>
         ${(index===activeIndex)?"animated":""}`}>
            <div className='flex'>
                <div className='text-white font-bold ml-[2rem] m-auto'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <BsFillArrowUpCircleFill  className='w-8 h-8 text-white' />
                : <BsFillArrowDownCircleFill className='w-8 h-8 text-white' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div  className={`shadow-3xl rounded-2xl shadow-cyan-500/50 flex w-1/2 justify-between p-2 mt-2  ${(index===activeIndex)?"animated":""}`}>
              {children}
            </div>
        )}
    </>
  );
};

export default AccordionLayout;