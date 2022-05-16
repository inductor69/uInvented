import Link from "next/link";
import Image from "next/image";
import { Testimonial } from "../components/testimonial";
import React from "react";
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
            <div className="md:text-8xl text-6xl text-center md:leading-[7rem] font-extrabold leading-[4rem] ">
              <div className="py-1">Developing the</div>
              <div className="py-1 pb-4">Digital World</div>
            </div>
            <div className="sm:text-2xl font-medium	 text-md text-center md:leading-[7rem] ">
              Quality standards. Unlimited requests & revisions. Painless
              management.
            </div>
          </div>
          <div className="py-8 flex justify-center text-xl space-x-8">
            <Link href="#" passHref>
              <a
                href="#"
                className="border hover:border-black bg-black hover:bg-white rounded py-3 px-8 text-white hover:text-black transition duration-500 font-bold"
              >
                Contact Us
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mb-[3rem]">
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
                <div className="flex-initial text-xl   mt-4">
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
                <div className="flex-initial w-64 text-xl  mt-4">
                  Month-to-month
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
                <div className="flex-initial w-64 text-xl  mt-4">
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
                <div className="flex-initial w-64 text-xl  mt-4">
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
      <div className="flex flex-col  bg-black text-white ">
        <div className="flex mt-5 mb-5">
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
        </div>
        <div className="w-full md:w-5/6 ">
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
        </div>
        {/*Our Workflow*/}
        <div className="flex flex-col  mt-8  bg-black text-white ">
          <div className="text-5xl md:text-8xl mx-6  md:mx-14 mb-8">
            Experiences
          </div>
          <div className="text-2xl md:text-3xl mx-6 md:mx-14 mb-14">
            Digital products, websites and experiences for startups and iconic
            companies.
            <ul className="list-disc text-2xl mt-4 mx-6 leading-10">
              <li>3-4 weeks lead time</li>
              <li>UX & Market Research</li>

              <li>Wireframes (full UX design)</li>

              <li>UI Mockups (full product design)</li>
              <li>Final Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Our Portfolio*/}

      <div className="text-4xl sm:text-6xl bg-black text-[#fffbe9] text-center py-4 ">
        Our Portfolio
      </div>

      <div className="bg-black md:px-[10rem] p-8 ">
        <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#9df5fd] text-black row align-baseline my-20">
          <div className="  p-10  sm:mt-[30rem]">
            <p className="max-w-md text-3xl md:text-5xl font-semibold ">
              Elekrity
            </p>
            <p className=" text-secondary text-xl md:text-2xl  mt-3">
              Beat procrastination and get your personal goals completed as
              planned!
            </p>
            <Link href="/" passHref>
              <button
                href="/"
                className="border mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-[#9df5fd] text-white hover:text-black transition duration-500 font-bold"
              >
                Case Study
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
        <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#ffefdf] text-black row align-baseline my-20">
          <div className="  p-10  sm:mt-[30rem]">
            <p className="max-w-md text-3xl md:text-5xl font-semibold ">
              Personal Portfolio
            </p>
            <p className=" text-secondary text-xl md:text-2xl  mt-3">
              Personal Portfolio showcasing the work of Founders and Designers
              built with NextJS.
            </p>
            <Link href="/" passHref>
              <button
                href="/"
                className="border mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-[#ffefdf] text-white hover:text-black transition duration-500 font-bold"
              >
                Case Study
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
        <div className="flex rounded-[2rem] flex-wrap-reverse sm:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl bg-[#F0E4FC] text-black row align-baseline my-10">
          <div className="  p-10  sm:mt-[30rem]">
            <p className="max-w-md text-3xl md:text-5xl font-semibold ">
            Personal Portfolio
            </p>
            <p className=" text-secondary text-xl md:text-2xl  mt-3">
            Personal Portfolio showcasing the work of Founders and Designers
              built with NextJS.            </p>
            <Link href="/" passHref>
              <button
                href="/"
                className="border mt-10 px-8 py-2 rounded hover:border-black text-md xl:text-xl bg-black hover:bg-white text-white hover:text-black transition duration-500 font-bold"
              >
                Case Study
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
      </div>

      {/*Our Testimonials*/}

      <div className="w-full h-full bg-[#000] pb-10 ">
        <div className="sm:text-5xl text-white bg-black  text-md text-center md:leading-[7rem]  ">
          Our Testimonials
        </div>
        <Testimonial />
      </div>

      {/* Newsletter */}
      <div className="w-full  h-full bg-[#000]  ">
        <div className="container  mx-auto ">
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
                <h3 className="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">
                  Subscribe now!
                </h3>
                <div className="w-3/5 mb-8 sm:flex sm:items-center sm:bg-white sm:border-2 sm:rounded-full">
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
                  <form onSubmit={registerUser} className='w-full'>
                    <input
                      className="w-full sm:w-[50%] mb-4 sm:mb-0 pl-8 sm:pl-4 py-5  rounded-full placeholder-gray-900 font-bold focus:outline-none"
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
