import Link from "next/link";
import Image from "next/image";
import { Testimonial } from "../components/testimonial";
import React from "react";
import Wave from "../components/Wave";
import { Portfolio } from "../components/Portfolio";
export default function Landing() {
  const registerUser = async (event) => {
    event.preventDefault(); // prevents page from redirecting on form submissiomn

    // call default function in pages/api/register
    // send the email and password from form submission event to that endpoint
    // console.log(event.target.email.value)
    try {
      const res = await fetch("/api/subscribe", {
        body: event.target.email.value,
        method: "POST",
      });

      const result = await res.json();
      if (result.error !== null) {
        throw result.error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [show, toggleShow] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);
  const [message, setMessage] = React.useState("");

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  return (
    <>
      <main className="">
        <div className="container mx-auto my-16 ">
          {/*center the text */}
          <div className="flex flex-col items-center justify-center ">
            <div className="md:text-6xl text-4xl text-center  font-extrabold ">
              <div className="py-1 md:mb-8">Providing solutions for</div>
            </div>
            <div className="md:text-9xl text-6xl text-center md:leading-[7rem] font-extrabold leading-[4rem]">
              <div className="py-1 mb-12">Digital World</div>
            </div>

            <div className="text-xs mb-3">
              <div className="title-wrap">
                <div className="left-text">
                  We will help you in your product
                </div>
                <div className="right-text">
                  <div className="flip-wrap">
                    <div className="flip">
                      <br />
                    </div>
                    <div className="flip">designing.</div>
                    <div className="flip">developing.</div>
                    <div className="flip">analysis.</div>
                    <div className="flip">marketing.</div>
                    <div className="flip">support.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex justify-center text-xl space-x-8 mb-6">
            <Link href="/contactus" passHref>
              <button
                className=" button1 border  rounded py-3 px-8 text-white  font-bold"
                type="button"
              >
                Let's Work Together
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mb-[4rem]">
            <div className="grid grid-cols-2 grid-rows-2   ">
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14 mt-3"
                  style={{
                    width: "50px",
                    height: "40px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/predictable.svg" // Route of the image file
                    layout="fill"
                    alt="Landing"
                  />
                </div>
                <div className="flex-initial text-xl   mt-4">
                  Predictable pricing
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14 mt-3"
                  style={{
                    width: "50px",
                    height: "40px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/monthly.svg" // Route of the image file
                    layout="fill"
                    alt="Landing"
                  />
                </div>
                <div className="flex-initial w-56 text-xl   mt-4">
                  Payment in Installments
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14  mt-3"
                  style={{
                    width: "50px",
                    height: "40px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/cancel.svg" // Route of the image file
                    layout="fill"
                    alt="Landing"
                  />
                </div>
                <div className="flex-initial w-64 text-xl  mt-4">
                  Cancel anytime
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14  mt-3"
                  style={{
                    width: "50px",
                    height: "40px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/returnsvg.svg" // Route of the image file
                    layout="fill"
                    alt="Landing"
                  />
                </div>
                <div className="flex-initial w-64 text-xl   mt-4">
                  15 day trial period
                </div>
              </div>
            </div>
          </div>
          {/*center the image container */}
          <div className="flex flex-col items-center justify-center">
            <div
              style={{
                maxWidth: "900px",
                width: "90%",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                src="/images/top.svg" // Route of the image file
                width={64}
                height={64}
                layout="responsive"
                alt="Your Name"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </main>
      {/*SERVICES*/}
      <Wave index={0} />
      <div className="bg-black">
        <div className="flex flex-col  bg-black text-white ">
          {/* <div className="flex mt-5 mb-5">
          <div
            className="flex-none w-14 h-14 ml-2 mt-3"
            style={{ width: "90px", height: "40px", position: "relative" }}
          >
            <Image
              src="/images/line-sm.svg" // Route of the image file
              layout="fill"
              alt="Landing"
            />
          </div>
          <div className="flex-initial w-64 text-2xl ml-2 mt-4">
            How we deliver
          </div>
        </div> */}
          {/* <div className="w-full md:w-5/6 ">
          <div
            style={{ lineHeight: "125%" }}
            className="  text-3xl md:text-5xl mx-8 md:mx-14 mb-14"
          >
            We design compelling Brand Identities and impactful Digital
            Experiences for innovative companies around the world. Using the
            industry-proven methods Jobs to be Done and Design Sprint, we've
            developed a highly optimised design delivery process that brings
            results in just a few weeks. Sounds like what you’re looking for?
          </div>
        </div> */}
          {/*Our Workflow*/}
          <div className="flex flex-col  mt-8  bg-black text-white ">
            <div className="text-4xl md:text-6xl mx-6 font-bold md:mx-14 mb-8">
              Our Promises
            </div>
            <div className="text-2xl md:text-3xl mx-6 md:mx-14 mb-14 md:w-3/4 w-1/1">
              Our expertise is in digital products like websites, mobile apps,
              e-commerce platforms, content and much more for startups and
              iconic companies.
              <ul className="list-disc text-2xl mt-4 mx-6 leading-10">
                <li>Reliable Services</li>
                <li>Data and Legal Security</li>
                <li>Innovative Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        {/*Our Portfolio*/}

        <div
          className={`text-4xl sm:text-6xl  text-[#fffbe9] text-center py-8`}
        >
          Our Portfolio
        </div>
        <Portfolio />

        {/*Our Testimonials*/}

        <div className="w-full h-full pt-[3rem]  ">
          <div className=" text-white bg-black text-4xl sm:text-6xl   text-md text-center md:leading-[7rem] mb-10 md:mb-0  ">
            Our Testimonials
          </div>
          <Testimonial />
        </div>

        {/* Newsletter */}
        <div className=" h-full   ">
          <div className="container   mx-auto ">
            <div className="md:mx-auto pb-[4rem] pt-[4rem]">
              <div
                className="relative pt-16 px-6 lg:px-24 pb-20 bg  bg-opacity-5 bg-cover backdrop-brightness-50 rounded-3xl overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(./images/git.png)",
                }}
              >
                <div className="relative">
                  <div className="text-3xl md:text-4xl md:leading-[3.5rem]   text-white font-bold  mb-8">
                    Join 20k+ Designers, Founders & Makers
                  </div>

                  <span className="text-base lg:text-lg text-white font-bold">
                    More news
                  </span>
                  <blockquote className="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-black relative inline-block">
                      <span className="relative text-white">
                        Subscribe now!
                      </span>
                    </span>
                  </blockquote>

                  <div className="sm:w-3/5 mb-8 sm:flex sm:items-center sm:bg-white sm:border-2 sm:rounded-full">
                    <span className="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10 ">
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="18.5"
                          cy="18.5"
                          r="9.5"
                          fill="#1F40FF"
                          fillOpacity="0.15"
                        ></circle>
                        <circle
                          cx="18.5"
                          cy="18.5"
                          r="18.5"
                          fill="#1F40FF"
                          fillOpacity="0.06"
                        ></circle>
                        <circle
                          cx="18.5"
                          cy="18.5"
                          r="2.5"
                          fill="#282C36"
                        ></circle>
                      </svg>
                    </span>
                    
                    <form
                      onSubmit={registerUser}
                      method="POST"
                      className="w-full"
                    >
                      
                      <input
                        className="w-full sm:w-[50%] mb-4 sm:mb-0 pl-8 sm:pl-4 py-5   rounded-full placeholder-gray-900 font-bold focus:placeholder-gray-500  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        onSubmit={registerUser}
                        onChange={validateEmail}
                        placeholder="Drop your Email"
                      />
                      <button
                        type="submit"
                        name="submit"
                        onClick={() => toggleShow(!show)}
                        className="w-full sm:w-[50%] px-10 py-5 font-bold bg-black text-white hover:underline rounded-full transition duration-200"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                  {!show && isValid && (
                    <p className="text-white">
                      <span>
                        Thank you for signing up. Please check your email inbox
                        to verify your e-mail address!
                      </span>
                    </p>
                  )}

                  <div
                    style={{ color: "white" }}
                    className={`message ${isValid ? "success" : "error"}`}
                  >
                    {message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
