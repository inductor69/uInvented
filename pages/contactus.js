import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import Wave from "../components/Wave";
import { Footer } from "../components/Footer";
import Meta from "../components/Meta";

export default function ContactUs() {
  return (
    <>
      <Meta title="Contact Us" />
      <Nav />
      <Wave index={0} />

      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8  ">
          <div className="md:text-6xl text-4xl md:mt-[4rem]">
            <div className="py-1">contact us.</div>
          </div>
          <div className="sm:text-2xl text-md  md:w-1/2 pb-[1rem] mt-[2rem] leading-normal">
            Contact us for a quote, help or to join the team.
          </div>
        </div>
      </div>
      <Wave index={1} />

      <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
        <div className="md:text-6xl font-bold text-4xl md:mt-[4rem]">
          <div className="py-1">get in touch.</div>
        </div>
        <div className="sm:text-2xl text-md text-center md:w-1/2  text-[#575757] mt-[2rem] ">
          We've engineered something special.
        </div>
      </div>

      <div className="md:grid grid-cols-3 grid-flow-col md:mx-[3rem] mx-8 gap-2 justify-items-center text-center  mb-[4rem] mt-[4rem] items-center ">
        <div className="max-w-sm bg-white   rounded-lg border border-gray-200 shadow-md ">
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

        <div className="max-w-sm bg-white  rounded-lg border border-gray-200 shadow-md ">
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
        <div className="max-w-sm bg-white  rounded-lg border border-gray-200 shadow-md ">
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
                  <div className="w-full md:w-1/3  mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          width={400}
                          height={400}
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 "
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
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 "
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
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 "
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
