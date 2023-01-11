import Image from "next/image";
import { Nav } from "../components/Nav";
import Wave from "../components/Wave";
import { Footer } from "../components/Footer";
import Meta from "../components/Meta";
import Balancer from 'react-wrap-balancer'


export default function HowItWorks() {

  return (
    <>

      <Meta title="How it works" />
      <Nav />

      <Wave index={0} />

      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8 w-2/3 md:w-1/2 mb-[2rem]   ">
          <div className="md:text-6xl text-4xl md:mt-[4rem] mt-[2rem] ">
            <div className="py-1">
              simple process
              <br /> incredible results
            </div>
          </div>
          <div className="sm:text-2xl text-md  md:w-3/4 pb-[1rem] mt-[2rem] leading-normal">
            Delegate web tasks like never before
          </div>
        </div>
      </div>
      <Wave index={1} />

      <div className="md:flex ">
        <div className="md:w-1/2 ">
          <div className="py-10 md:py-20 md:sticky md:top-0 md:left-0">
            <div className="w-3/4 mx-auto">
              <div className=" ">
                <div className="md:text-6xl text-4xl font-bold md:mt-[4rem]">
                  <div className="py-1 mb-3">start risk-free</div>
                </div>
                <div className="sm:text-2xl text-md text-gray-700    md:mt-[2rem] ">
                <Balancer>
                  Start with the first 15 days to evaluate the service with full
                  app access and a limited build scope—no credit-card required.
                  Pay and unlock the full scope anytime before the 15 days when
                  you're happy with the work.
                  </Balancer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 ml-auto  ">
          <div className=" flex justify-center items-center  ">
            <div className="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/bookcall.svg" alt="" />
              </a>
              <div className="p-5 ">
                <a href="#">
                  <h5 className="mb-4 text-4xl font-bold tracking-tight  t">
                    book demo
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  Understand our benefits, see in-app work delegation, and view
                  a customer case study.
                </p>
              </div>
            </div>
          </div>
          <div className="  flex justify-center items-center flex-col ">
            <div className="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/request.svg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-4 text-4xl font-bold tracking-tight t ">
                    request a project
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  Send your first task. Share design assets, briefs, or
                  requirements and our team gets to work.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col ">
            <div className="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/review.svg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-4 text-4xl font-bold tracking-tight t">
                    review
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  We provide deliverables and you let us know your feedback.
                  Unlimited edits until you're satisfied.
                </p>
              </div>
            </div>
            <div className="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/upgrade.svg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-4 text-4xl font-bold tracking-tight t">
                    upgrade
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  Make a payment to unlock the full scope of your plan.
                </p>
              </div>
            </div>
            <div className="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/golive.svg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-4 text-4xl font-bold tracking-tight t">
                    keep going
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  Publish your site, build more, or start your next project!
                </p>
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
