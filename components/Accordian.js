import React, { useState } from 'react';
import AccordionLayout  from './accordianLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

  return (
      <div className='flex flex-col justify-center items-center pb-[4rem]'>
          <AccordionLayout 
            title="What do you mean by 'unlimited'?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
             <div className='text-black'>
            A flat-rate subscription service that allows you to request as many tasks as you want. Once a task is complete, we move onto the next one in the queue.    </div>
          </AccordionLayout>

          <AccordionLayout 
            title="How fast is your turnaround time?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Depending on the task, it can take anywhere from 1 business day to 4 business days. Rest assured, you will have your design project done within one week. However, for complex tasks such as landing page design, front-end development and other Webflow based items, it may take a longer time.   
          </AccordionLayout>

          <AccordionLayout 
            title="What is your methodology?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            In regards to the methodology that we follow, we first send a initial client form to get a written understanding of what you may want from my services. Then we produce some prototypes using Figma and using the Figma file we are able to transfer that onto a final website that will be displayed for your future customers.   
          </AccordionLayout>
      </div>
  );
};

export default Accordion;