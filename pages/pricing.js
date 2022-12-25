import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Accordion from "../components/Accordian";
import Wave from "../components/Wave";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Meta from "../components/Meta";


export default function Pricing() {


  return (
    <>
      <Meta title="Pricing" />
      <Nav />
      {/* <div
        style={{
          height: "30px",
          position: "relative",
          transform: "rotate(180deg)",
        }}
      >
        <Image
          src="/images/bottom.svg" // Route of the image file
          layout="fill"
          className="object-cover"
          alt="Landing"
        />
      </div> */}
            <Wave index={0}/>

      <div className="flex flex-col  bg-black text-white  ">
        <div className="flex flex-col md:mx-[3rem] mx-8 w-1/2 mb-[3rem] ">
          <div className="md:text-6xl text-4xl md:mt-[4rem]">
            <div className="py-1">
              plans for ambitious scaleups and agencies.
            </div>
          </div>
          <div className="sm:text-2xl text-md   mt-[2rem] ">
            Backed by our 15-day risk-free trial period, no credit card
            required.
          </div>
        </div>
      </div>
      <Wave index={1}/>


      <section
        className="
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   relative
   z-20
   overflow-hidden
   "
      >
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Pricing Table
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color">
              No contracts or surprises. Cancel anytime. Upgrade or downgrade at any time.

              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mx-[2rem]">
          <div className="flex flex-col w-full  lg:w-1/3 px-4 drop-shadow  items-center xl:max-w-[500px]">
            <div
              className="
              flex-1
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               md:w-2/3
               lg:w-full
               relative
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                starter
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $2799
                <span className="text-base text-body-color font-medium">
                  /month
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Best if you have your own, in house designer and regularly need help with development.
              </p>
              <div className="mb-[100px] ">
              <ul class="list-disc">

                <li className=" text-base text-body-color leading-loose mb-1">
                Unlimited requests and revisions
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Real-time communication
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Cancel, upgrade or downgrade at any time

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Task dashboard on Notion
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Native source file included
                </li>
                </ul>
              </div>
              <a
                href="https://buy.stripe.com/test_5kAcNY9CE8b61QQ8wx"
                className="
                flex-1

                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  border hover:border-black bg-white hover:bg-black text-black hover:text-white transition duration-500 font-bold
                  transition
                  absolute
                  bottom-0 left-0 right-0
                  m-6

                  md:m-10


                  "
              >
                Book Demo
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width={77}
                    height={172}
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1={86}
                        y1={0}
                        x2={86}
                        y2={172}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#000" stopOpacity="0.09" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width={41}
                    height={89}
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#000"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full  lg:w-1/3 px-4 drop-shadow  items-center xl:max-w-[500px]">
            <div
              className="
              flex-1
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               md:w-2/3
               lg:w-full
               relative
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                growth
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $3499
                <span className="text-base text-body-color font-medium">
                  /month
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Ideal for those looking for design & front-end development who need regular help.
              </p>
              <div className="mb-[100px] ">
              <ul class="list-disc ">

                <li className="text-base text-body-color leading-loose mb-1">
                All the Design plan features

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Front-end development with Webflow

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Ongoing support and maintenance

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Cancel, upgrade or downgrade at any time
                </li>
                </ul>
              </div>
              <a
                href="javascript:void(0)"
                className="
                flex-1
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  border hover:border-black bg-white hover:bg-black text-black hover:text-white transition duration-500 font-bold
                  transition
                  absolute
                  bottom-0 left-0 right-0
                  m-6
                  md:m-10
                  "
              >
                Book Demo
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width={77}
                    height={172}
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1={86}
                        y1={0}
                        x2={86}
                        y2={172}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#000" stopOpacity="0.09" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width={41}
                    height={89}
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#000"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full  lg:w-1/3 px-4 drop-shadow  items-center xl:max-w-[500px]">
            <div
              className="
              flex-1
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               md:w-2/3
               lg:w-full
               relative
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                unlimited
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $75
                <span className="text-base text-body-color font-medium">
                  / hour
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Best if you are looking for occasional updates, tweaks or feature to your website.
              </p>
              <div className="mb-[100px] ">
              <ul class="list-disc">
                <li className="text-base text-body-color leading-loose mb-1">
                Includes design and development

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Priced competitively

                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Real time communication via Slack
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Cancel, upgrade or downgrade at any time
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Task dashboard von Notion
                </li>
                <li className="text-base text-body-color leading-loose mb-1">
                Unlimited team members

                </li>
                </ul>
              </div>
              <a
                href="javascript:void(0)"
                className="
                flex-1
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  border hover:border-black bg-white hover:bg-black text-black hover:text-white transition duration-500
                  transition
                  absolute
                  bottom-0 left-0 right-0
                  m-6
                  md:m-10
                  "
              >
                Book Demo
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width={77}
                    height={172}
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1={86}
                        y1={0}
                        x2={86}
                        y2={172}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#000" stopOpacity="0.09" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width={41}
                    height={89}
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#000"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#000"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center mb-[3rem] ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[1rem]">
          <div className="py-1">benefits.</div>
        </div>
        <div className="sm:text-2xl text-md text-center md:w-1/2  text-[#575757] mt-[2rem]  ">
          Everything you need in a managed web experience.
        </div>
      </div>

      <div className="px-6 pb-6 ">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 max-w-[1000px]">
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
                premium custom development
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
                We guarantee super hi-fidelity development across all screen
                sizes with clean code structures, modular components, and
                conventional-naming standards.
              </div>
            </div>
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
              world-class support
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
                Your point project manager will guide you and ensure you have a smooth and pleasant experience. Available via notion dashboard and enhanced chat.
              </div>
            </div>
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
              conversion-rate-optimization (CRO) enabled
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              More than just web development. Make requests to track, test, and understand everything about your website's performance. Eliminate the guesswork and make smarter site decisions with ease.
              </div>
            </div>
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
              technical best practices
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Never have a problem handling traffic. Your builds are speed and SEO optimized. Get set up with lightweight development, purposeful schemas, semantic html, 301 redirects, and more.
              </div>
            </div>
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
              secure a reliable team
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Forget dodgy freelancers, borrowing from engineering, or disconnected agencies. You get a managed experience of expert developers and technical marketers working whenever you need it.
              </div>
            </div>
            <div>
              <div className="flex flex-col font-bold  sm:text-2xl text-md  ">
              notion access
              </div>
              <div className="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Find everything in one place for a laser-focused flow. Collaborate, make requests, and manage projects/sites with our intuitive notion managed platform.
              </div>
            </div>
          </div>
      </div>

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center mb-[3rem] ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[1rem]">
          <div className="py-1">faqs.</div>
        </div>

      </div>
      <Accordion/>
      <Wave index={0}/>



      <Footer />
    </>
  );
}
