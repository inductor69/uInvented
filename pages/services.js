import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Wave from "../components/Wave";
import Meta from "../components/Meta";
export default function Services() {
  return (
    <>
      <Meta title="Services" />
      <Nav />
      <Wave index={0}/>

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
            What we deliver
          </div>
        </div>
        <div className="text-5xl md:text-9xl mx-6  md:mx-14">websites</div>
        <div className="text-5xl md:text-9xl mx-6  md:mx-14 ">apps</div>
        <div className="text-5xl md:text-9xl mx-6  md:mx-14 ">content</div>
        {/* <div className="text-5xl md:text-9xl mx-6  md:mx-14 ">Reports</div> */}
        <div className="text-5xl md:text-9xl mx-6 pb-[2rem]  md:mx-14 mb-8">
          reports
        </div>
        <div className="w-full md:w-5/6">
          <div style={{lineHeight:"125%"}} className="  text-xl md:text-4xl mx-8 md:mx-14 mb-14">
            We design compelling Brand Identities and impactful Digital
            Experiences for innovative companies around the world. <br/><br/>Using the
            industry-proven methods Jobs to be Done and Design Sprint, we've
            developed a highly optimised design delivery process that brings
            results in just a few weeks. <br/><br/>
            Sounds like what you’re looking for?
          </div>
        </div>
      </div>
      <Wave index={1}/>

      <div className="text-4xl md:text-7xl font-bold mx-6 pb-[2rem]  md:mx-14 mt-[2rem] md:mt-[4rem] ">
        if you can think it, we can build it.
      </div>
      <div className="w-full md:w-5/6">
        <div className="text-xl md:text-3xl mx-8 md:mx-14 mb-14 md:w-3/4">
          We offer no limits on build scope or features. You get unlimited
          requests and revisions every month.
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 px-[1rem]">
        <div className="text-4xl md:text-6xl font-bold mx-6 pb-[2rem]  md:mx-14 mt-[2rem] ">
          quality development
          <div className="text-xl md:text-xl sm:w-4/5 text-md text-[#575757] mt-[2rem] ">
          </div>
          <ul className="list-disc text-xl md:text-xl font-medium text-md text-[#575757] mt-[2rem] ml-[1rem]">
            <li className="mb-[1rem]">
              <b>Clearly defined goals</b> of the product help to achieve desired outcomes
            </li>
            <li className="mb-[1rem]">
              <b>User-centered design</b> of the product to be easy to use and intuitive
            </li>
            <li className="mb-[1rem]">
              <b>Iterative Development Process</b> to ensure best product-market fit
               site. We'll follow your current design system to keep
              things super clean.
            </li>
            <li className="mb-[1rem]">
              <b>Regular Updates and maintenance</b>   to meet all the needs of user
            </li>
            <li className="mb-[1rem]">
              <b>Robust Testing</b>  on variety devices and platforms to get rid of bugs
            </li>
          </ul>
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

      <div className="md:grid grid-cols-2 gap-4 px-[2rem] py-[2rem]">
        <div style={{ position: "relative" }}>
          <Image
            src="/images/experiment.svg" // Route of the image file
            layout="fill"
            className="object-fill"
            alt="Landing"
          />
        </div>


        <div className="text-4xl md:text-6xl font-bold mx-6 pb-[2rem]  md:mx-14 mt-[2rem] ">
          experiments
          <div className="text-xl md:text-xl sm:w-3/4 text-md text-[#575757] mt-[2rem] ">
          </div>
          <ul className="list-disc text-xl md:text-xl font-medium text-md text-[#575757] mt-[2rem] ml-[1rem]">
            <li className="mb-[1rem]">
              <b>Analyse Gathered Data</b> and identify poor performing areas
            </li>
            <li className="mb-[1rem]">
              <b>Conduct User Research</b> to gather insights about the user experience
            </li>
            <li className="mb-[1rem]">
              <b>Develop and Test Hypothesis</b> using A/B testing and observe the impact
            </li>
            <li className="mb-[1rem]">
              <b>Implement the changes</b>  to improve conversion rate of the product
            </li>
          </ul>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 px-[2rem]">
        <div className="text-4xl md:text-6xl font-bold mx-6 pb-[2rem]  md:mx-14 mt-[2rem] ">
          friendly management
          <div className="text-xl md:text-xl font-medium sm:w-3/4 text-md text-[#575757] mt-[2rem] ">
            Your project manager will ensure you have a smooth and pleasant
            experience. Use our app to send requests and our team will work on
            your projects every business day. Communicate with us via project
            dashboard and live chat.
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src="/images/team.svg" // Route of the image file
            layout="fill"
            className="object-fill"
            alt="Landing"
          />
        </div>
      </div>
      <Wave index={0}/>

      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
          <div className="md:text-6xl text-4xl md:mt-[4rem]">
            <div className="py-1">Who is it for?</div>
          </div>
          <div className="sm:text-2xl text-md text-center md:w-3/5  mt-[2rem] ">
            We work with companies at launch, product-market fit and growth
            stages. Our cross-functional team of Product and Branding experts
            acts as the extension of your team, bringing in-depth design and
            product expertise to help you discover and fix complex product
            challenges and build the most engaging version of your product.
          </div>
        </div>
        <div className="py-8 flex justify-center text-xl space-x-8 md:mb-[5rem] ">
        <Link href="/contactus" passHref>

            <a
              href="/contactus"
              className="border hover:border-black bg-black hover:bg-white rounded py-3 px-8 text-white hover:text-black transition duration-500 font-bold"
            >
              Contact Us
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
