import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
export default function HowItWorks() {
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
      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
          <div className="md:text-6xl text-4xl md:mt-[4rem] text-center">
            <div className="py-1">
              simple process.
              <br /> incredible results.
            </div>
          </div>
          <div className="sm:text-2xl text-md text-center md:w-1/2  mt-[1rem] md:mb-[2rem] ">
            Delegate web tasks like never before.
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

      <div className="sticky top-0 ">
        <div className="  md:fixed w-full md:w-7/12 md:min-h-screen ">
          <div className="flex flex-col  items-center justify-center ">
            <div className="flex flex-col md:mx-[3rem] mx-8 w-1/2 mb-[3rem]  ">
              <div className="md:text-6xl text-4xl md:mt-[4rem]">
                <div className="py-1">start risk-free.</div>
              </div>
              <div className="sm:text-2xl text-md text-gray-700    md:mt-[2rem] ">
                Start with the first 15 days to evaluate the service with full
                app access and a limited build scope—no credit-card required.
                Pay and unlock the full scope anytime before the 15 days when
                you're happy with the work.
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="w-full md:w-5/12 ml-auto">
          <div className=" flex justify-center items-center flex-col ">
            <div class="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/bookcall.svg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-4xl font-bold tracking-tight t">
                    book demo
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">
                  Understand our benefits, see in-app work delegation, and view
                  a customer case study.
                </p>
              </div>
            </div>
          </div>
          <div className=" h-1/2 flex justify-center items-center flex-col ">
            <div class="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/request.svg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-4xl font-bold tracking-tight t">
                    request a project
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">
                  Send your first task. Share design assets, briefs, or
                  requirements and our team gets to work.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col ">
            <div class="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/review.svg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-4xl font-bold tracking-tight t">
                    review
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">
                  We provide deliverables and you let us know your feedback.
                  Unlimited edits until you're satisfied.
                </p>
              </div>
            </div>
            <div class="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/upgrade.svg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-4xl font-bold tracking-tight t">
                    upgrade
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Make a payment to unlock the full scope of your plan.
                </p>
              </div>
            </div>
            <div class="max-w-sm md:mb-[4rem]  ">
              <a href="#">
                <img src="/images/golive.svg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-4xl font-bold tracking-tight t">
                    keep going
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Publish your site, build more, or start your next project!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}
