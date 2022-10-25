import Link from 'next/link';
import { useState } from 'react';

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 pt-5 border-b-2 border-black mb-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img width='32'height='32'  src='./images/logo.png'></img>
            <span className='text-xl text-black font-bold tracking-wide'>
              Invented
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:underline rounded lg:hidden text-black ml-auto hover:text-black outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex  lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex font-semibold	 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline hover:text-black '>
                Home
              </a>
            </Link>
            <Link href='/services'>
              <a className='lg:inline-flex font-semibold	 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline hover:text-black'>
                Services
              </a>
            </Link>
            <Link href='/pricing'>
              <a className='lg:inline-flex font-semibold	 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline hover:text-black'>
              Pricing
               
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex font-semibold	 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline hover:text-black'>
              About us
              </a>
            </Link>
            <Link href='/howitworks'>
              <a className='lg:inline-flex font-semibold	 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline hover:text-black'>
               How it works
              </a>
            </Link>
            
          </div>
        </div>
      </nav>
    </>
  );
};