import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import Wave from "../components/Wave";
import { Footer } from "../components/Footer";
import Meta from "../components/Meta";

export default function AboutUs() {
  return (
    <>
      <Meta title="About" />
      <Nav />
      <Wave index={0} />

      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8 w-2/3 md:w-2/3 mb-[2rem]   ">
          <div className="md:text-6xl text-4xl md:mt-[4rem] mt-[2rem] ">
            <div className="py-1">about uInvented.</div>
          </div>
          <div className="sm:text-2xl text-md  md:w-2/3  mt-[2rem] ">
          Our goal is to improve user experiences through affordable, high-quality web services. Whether you're a small start-up or a large corporation, we're here to help you succeed online.​
          </div>
        </div>
      </div>
      <Wave index={1} />

      <div className="md:grid grid-cols-2 gap-4 px-[2rem]">
        <div className="text-5xl md:text-7xl font-bold mx-6 pb-[2rem]  md:mx-14 mt-[2rem] ">
          the start of something new.
          <div className="text-xl font-medium sm:w-3/4 text-md text-[#575757] mt-[2rem] ">
            uInvented is a web services company based in India that offers growth-oriented organizations unlimited access to development and technical work at a flat rate. Our platform allows teams to easily create and update websites and marketing pages, helping businesses grow and succeed. With uInvented, organizations can create scalable, high-quality sites that drive their business forward.​
          </div>
          <div className="text-xl  font-medium sm:w-3/4 text-md text-[#575757] mt-[2rem] ">
            We're driven by a relentless focus on great work and culture. Our
            core values are.
          </div>
          <div className="grid grid-rows-2 grid-cols-2 font-medium grid-flow-col underline gap-3 mt-4 text-xl">
            <div >Continuous improvement</div>
            <div>Trust with transparency</div>
            <div>Diversity and inclusion</div>
            <div>Move fast</div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src="/images/dev.svg" // Route of the image file
            layout="fill"
            className="object-fill"
            alt="Landing"
          />
        </div>
      </div>

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[4rem] mt-[2rem]">
          <div className="py-1">how we're getting it done.</div>
        </div>
        <div className="sm:text-2xl text-lg text-center md:w-1/2  text-[#575757] mt-[2rem] ">
          We've engineered something special.
        </div>
      </div>

      <div className="md:grid grid-cols-3  grid-flow-col md:mx-[3rem] mx-8 gap-2 justify-items-center text-center  mb-[4rem] mt-[4rem] items-center ">
        <div className="max-w-sm bg-white mx-auto  rounded-lg border border-gray-200 shadow-md my-3 h-full">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded-t-lg w-1/2"
              src="/images/global.svg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              global remote team
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Our battle-tested team of top developers and technical specialists
              from around the world allows us to offer exceptional work with a
              faster turnaround.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md my-3 h-full">
          <div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="/images/technology.svg"
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  tech enabled
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 ">
                We use purpose-built technology combined with a specialized
                toolset to offer our unchained development and technical scope
                on an enterprise level.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md my-3 h-full">
          <div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="rounded-t-lg w-1/2"
                src="/images/semi-auto.svg"
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  semi-automated
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 ">
                Our orchestration is our secret sauce. We've developed a
                proprietary rigor of web ops complemented by an app to deliver a
                game-changing experience for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[4rem] mb-[4rem]">
          <div className="py-1">faces behind uInvented.</div>
        </div>
      </div>
      <div>
        {/* MDI Icons */}
        {/* Page Container */}
        <div className="flex items-center justify-center bg-white">
          <div className="flex flex-col ">
            <div className="flex flex-col ">
              {/* Meet the Team */}
              <div className="container max-w-7xl px-4">
                {/* Team Members */}
                <div className="flex flex-wrap">
                  {/* Member #1 */}
                  <div className="w-full md:w-1/3   mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col h-full">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          width={400}
                          height={400}
                          className="rounded-2xl md:h-64 lg:h-96 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 "
                          src="./images/aditya.jpeg"
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Aditya Kumar
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2">
                          Founder &amp; Specialist
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #2 */}
                  <div className="w-full md:w-1/3  mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          width={400}
                          height={400}
                          className="rounded-2xl drop-shadow-md md:h-64 lg:h-96 hover:drop-shadow-xl transition-all duration-200 delay-100 "
                          src="./images/aniket.jpg"
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Aniket Bhandare
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2">
                          Founder &amp; Specialist
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #3 */}
                  <div className="w-full md:w-1/3  mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          width={400}
                          height={400}
                          className="rounded-2xl drop-shadow-md md:h-64 lg:h-96 hover:drop-shadow-xl transition-all duration-200 delay-100 "
                          src="./images/Harshit.jpg"
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Harshit Bhalla
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2">
                          Founder &amp; Specialist
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave index={0} />

      <Footer />
    </>
  );
}
