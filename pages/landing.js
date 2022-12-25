import Link from "next/link";
import Image from "next/image";
import { Testimonial } from "../components/testimonial";
import React from "react";
import Wave from "../components/Wave";
export default function Landing() {
  const registerUser = async (event) => {
    event.preventDefault(); // prevents page from redirecting on form submissiomn

    // call default function in pages/api/register
    // send the email and password from form submission event to that endpoint
    const res = await fetch("/api/register", {
      body: JSON.stringify({
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
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


            <div class="text-xs mb-8">
              <div class="title-wrap">
                <div class="left-text">We will help you in your product</div>
                <div class="right-text">
                  <div class="flip-wrap">
                    <div class="flip">designing.</div>
                    <div class="flip">developing.</div>
                    <div class="flip">analysis.</div>
                    <div class="flip">marketing.</div>
                    <div class="flip">support.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex justify-center text-xl space-x-8 mb-6">
          <Link href="/contactus" passHref>
            <button
              className="border hover:border-black bg-black hover:bg-white rounded py-3 px-8 text-white hover:text-black transition duration-500 font-bold"
              type="button"
            >
              Let's Work Together
            </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mb-[4rem]">
            <div className="grid grid-cols-2 grid-rows-2 mx-2  ">
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14 mt-3"
                  style={{
                    width: "90px",
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
                <div className="flex-initial text-xl font-bold   mt-4">
                  Predictable pricing
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14 mt-3"
                  style={{
                    width: "90px",
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
                <div className="flex-initial w-64 text-xl font-bold  mt-4">
                  Payment in Installments
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14  mt-3"
                  style={{
                    width: "90px",
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
                <div className="flex-initial w-64 text-xl font-bold  mt-4">
                  Cancel anytime
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <div
                  className="flex-none w-14 h-14  mt-3"
                  style={{
                    width: "90px",
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
                <div className="flex-initial w-64 text-xl font-bold  mt-4">
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
                width="200%"
                height="100%"
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
          <div className="text-2xl md:text-3xl mx-6 md:mx-14 mb-14">
            Digital products, websites and experiences for startups and iconic
            companies.
            <ul className="list-disc text-2xl mt-4 mx-6 leading-10">
              <li>Reliable Services</li>
              <li>Data and Legal Security</li>

              <li>Innovative Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Our Portfolio*/}

      <div className="text-4xl sm:text-6xl bg-black text-[#fffbe9] text-center py-4 ">
        Our Portfolio
      </div>

      <div className="min-h-screen   bg-black relative">
        <div className="bg-black " style={{ scrollSnapType: "x mandatory" }}>
          {/* first */}
          <div className>
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-2"
            />
            {/* content #1 */}
            <div className=" md:container md:mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#9df5fd] text-black row align-baseline my-20">
                <div className="  p-10  sm:mt-[30rem]">
                  <p className="max-w-md text-3xl md:text-5xl font-semibold ">
                    Elekrity
                  </p>
                  <p className=" text-secondary text-xl md:text-2xl  mt-3">
                    Beat procrastination and get your personal goals completed
                    as planned!
                  </p>
                  <Link href="/" passHref>
                    <button
                      href="/"
                      className=" mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-[#9df5fd] text-[#9df5fd] hover:text-black transition duration-500 font-bold"
                    >
                      View Project
                    </button>
                  </Link>
                </div>
                <div className=" container  rounded-[2rem]  ">
                  <div
                    style={{
                      minHeight: "15rem",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      className=" container h-full rounded-tl-[2rem] sm:rounded-br-[2rem] sm:rounded-tl-[0rem] rounded-tr-[2rem]"
                      src="/images/portfolio.png" // Route of the image file
                      layout="fill"
                      alt="Photo of Project"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              {/* controls */}
              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  htmlFor="carousel-1"
                  className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  htmlFor="carousel-3"
                  className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="">
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-1"
              defaultChecked
            />
            {/* content #2 */}
            <div className=" md:container md:mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#F0E4FC] text-black row align-baseline my-10">
                <div className="  p-10  sm:mt-[30rem]">
                  <p className="max-w-md text-3xl md:text-5xl font-semibold ">
                    Personal Portfolio
                  </p>
                  <p className=" text-secondary text-xl md:text-2xl  mt-3">
                    Personal Portfolio showcasing the work of Founders and
                    Designers built with NextJS.{" "}
                  </p>
                  <Link href="/" passHref>
                    <button
                      href="/"
                      className=" mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-[#F0E4FC] text-[#F0E4FC] hover:text-black transition duration-500 font-bold"
                    >
                      View Project
                    </button>
                  </Link>
                </div>
                <div className=" container  rounded-[2rem]  ">
                  <div
                    style={{
                      minHeight: "15rem",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      className=" container h-full rounded-tl-[2rem] sm:rounded-br-[2rem] sm:rounded-tl-[0rem] rounded-tr-[2rem]"
                      src="/images/meet.png" // Route of the image file
                      layout="fill"
                      alt="Photo of Project"
                      objectFit="fill"
                    />
                  </div>
                </div>
              </div>
              {/* controls */}
              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  htmlFor="carousel-3"
                  className="inline-block text-[#9969c9] cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  htmlFor="carousel-2"
                  className="inline-block text-[#9969c9] cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          
          {/* three */}
          <div className>
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              id="carousel-3"
            />
            {/* content #3 */}
            <div className=" md:container md:mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#ffefdf] text-black row align-baseline my-20">
                <div className="  p-10  sm:mt-[30rem]">
                  <p className="max-w-md text-3xl md:text-5xl font-semibold ">
                    Personal Portfolio
                  </p>
                  <p className=" text-secondary text-xl md:text-2xl  mt-3">
                    Personal Portfolio showcasing the work of Founders and
                    Designers built with NextJS.
                  </p>
                  <Link href="/" passHref>
                    <button
                      href="/"
                      className=" mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-[#ffefdf] text-[#ffefdf] hover:text-black transition duration-500 font-bold"
                    >
                      View Project
                    </button>
                  </Link>
                </div>
                <div className=" container  rounded-[2rem]  ">
                  <div
                    style={{
                      minHeight: "15rem",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      className=" container h-full rounded-tl-[2rem] sm:rounded-br-[2rem] sm:rounded-tl-[0rem] rounded-tr-[2rem]"
                      src="/images/relax.png" // Route of the image file
                      layout="fill"
                      alt="Photo of Project"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              {/* controls */}
              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  htmlFor="carousel-2"
                  className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  htmlFor="carousel-1"
                  className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black md:px-[10rem] p-8 "></div>

      {/*Our Testimonials*/}

      <div className="w-full h-full bg-[#000] pb-10 ">
        <div className="sm:text-5xl text-white bg-black  text-md text-center md:leading-[7rem]  ">
          Our Testimonials
        </div>
        <Testimonial />
      </div>
      
      

      {/* Newsletter */}
      <div className=" h-full bg-[#000]  ">
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
                <blockquote class="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">
                  <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-black relative inline-block">
                    <span class="relative text-white">Subscribe now!</span>
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
                  <form onSubmit={registerUser} className="w-full">
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
                      Thank you for signing up. Please check your email inbox to
                      verify your e-mail address!
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
    </>
  );
}
