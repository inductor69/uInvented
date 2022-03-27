import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Accordion from "../components/Accordian";


export default function Pricing() {
  return (
    <>
      <Nav />

      <div
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
      </div>
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
      <div
        style={{
          height: "30px",
          position: "relative",
        }}
      >
        <Image
          src="/images/bottom.svg" // Route of the image file
          layout="fill"
          className="object-cover"
          alt="Landing"
        />
      </div>

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
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-[2rem] ">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 drop-shadow">
            <div
              className="
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
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                starter
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $59
                <span className="text-base text-body-color font-medium">
                  / year
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
                You have a small site or a few pages and features. Perfect for
                standard sites and basic recurring adjustments.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  1 User
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on 1 (one) project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  3 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                  w-full
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
                        <stop stopColor="#3056D3" stopOpacity="0.09" />
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
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 drop-shadow">
            <div
              className="
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
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                growth
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $199
                <span className="text-base text-body-color font-medium">
                  / year
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
                You have more complex features on a larger site. Great for
                interactive sites and increased ongoing output.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  5 Users
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on 3 (Three) project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  4 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                  w-full
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
                        <stop stopColor="#3056D3" stopOpacity="0.09" />
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
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 drop-shadow">
            <div
              className="
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
               "
            >
              <span className=" font-semibold text-2xl md:text-3xl block mb-4">
                unlimited
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $256
                <span className="text-base text-body-color font-medium">
                  / year
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
                For mission-critical sites and agencies. Perfect for
                conversion-focused needs and scaling production on demand.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Unlimited Users
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on Unlimited project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  12 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                  w-full
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
                        <stop stopColor="#3056D3" stopOpacity="0.09" />
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
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
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

      <div class="px-6 pb-6">
        <dh-component>
          <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 ">
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
                premium custom development
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
                We guarantee super hi-fidelity development across all screen
                sizes with clean code structures, modular components, and
                conventional-naming standards.
              </div>
            </div>
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
              world-class support
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
                Your point project manager will guide you and ensure you have a smooth and pleasant experience. Available via project dashboard and enhanced live chat.
              </div>
            </div>
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
              conversion-rate-optimization (CRO) enabled
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              More than just web development. Make requests to track, test, and understand everything about your website's performance. Eliminate the guesswork and make smarter site decisions with ease.
              </div>
            </div>
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
              technical best practices
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Never have a problem handling traffic. Your builds are speed and SEO optimized. Get set up with lightweight development, purposeful schemas, semantic html, 301 redirects, and more.
              </div>
            </div>
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
              secure a reliable team
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Forget dodgy freelancers, borrowing from engineering, or disconnected agencies. You get a managed experience of expert developers and technical marketers working whenever you need it.
              </div>
            </div>
            <div>
              <div class="flex flex-col font-bold  sm:text-2xl text-md  ">
              app access
              </div>
              <div class="flex flex-col font-medium justify-center items-center text-[#575757] sm:text-md text-md mt-2 ">
              Find everything in one place for a laser-focused flow. Collaborate, make requests, and manage projects/sites with our intuitive dashboard.
              </div>
            </div>
          </div>
        </dh-component>
      </div>

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center mb-[3rem] ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[1rem]">
          <div className="py-1">faqs.</div>
        </div>

      </div>
      <Accordion/>
      <div
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
      </div>
      

      <Footer />
    </>
  );
}
