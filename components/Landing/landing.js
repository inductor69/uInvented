import Link from "next/link";
import Image from 'next/image'
import { fill } from "tailwindcss/defaultTheme";
import "./landing.module.css";


export default function Landing() {
    return (
        <>
            <main className=" bg-[#FFFBE9]">
                <div className="container mx-auto my-16">
                    {/*center the text */}
                    <div className="flex flex-col items-center justify-center ">
                        <div className="sm:text-8xl text-4xl  text-center md:leading-[7rem] leading-[4rem] ">
                            Designing the<br /> Digital World
                        </div>
                        <div className="sm:text-2xl text-md text-center md:leading-[7rem] " >
                            Mobile, AR/VR and Blockchain Services

                        </div>
                    </div>
                    <div class="py-8 flex justify-center text-xl space-x-8">
                        <Link href="#" passHref>

                            <a href="#" class="border hover:border-black bg-black hover:bg-white rounded py-3 px-8 text-white hover:text-black transition duration-500 font-bold">Contact Us</a>
                        </Link>
                    </div>
                    {/*center the image container */}
                    <div className="flex flex-col items-center justify-center ">
                        <div style={{ width: '900px', height: '400px', position: 'relative' }}>

                            <Image
                                src="/images/top.svg" // Route of the image file
                                layout="fill"
                                alt="Your Name"
                            />
                        </div>
                    </div>

                </div>
            </main>
            {/*SERVICES*/}
            <div className="flex flex-col  bg-black text-white ">
                <div class="flex mt-5 mb-5">

                    <div class="flex-none w-14 h-14 ml-2 mt-4" style={{ width: '90px', height: '40px', position: 'relative' }}>

                        <Image
                            src="/images/line-sm.svg" // Route of the image file
                            layout="fill"
                            alt="Landing"
                        />

                    </div>
                    <div class="flex-initial w-64 text-2xl ml-2 mt-4">
                        How we deliver

                    </div>
                </div>
                <div class="w-5/6">

                    <div className="  text-5xl mx-14 mb-14">
                        We design compelling Brand Identities and impactful Digital Experiences for innovative companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprint, we've developed a highly optimised design delivery process that brings results in just a few weeks. Sounds like what you’re looking for?
                    </div>
                </div>
                {/*Our Workflow*/}
                <div className="flex flex-col  mt-8  bg-black text-white ">

                    <div className="  text-8xl mx-14 mb-8">
                        Experiences
                    </div>
                    <div className="  text-3xl mx-14 mb-14">
                        Digital products, websites and experiences for startups and iconic companies.
                        <ul class="list-disc text-2xl mt-4 mx-6 leading-10">
                            <li>3-4 weeks lead time</li>
                            <li>UX & Market Research</li>

                            <li>Wireframes (full UX design)</li>

                            <li>UI Mockups (full product design)</li>
                            <li>FInal Development</li>

                        </ul>
                    </div>

                </div>

            </div>

            {/*Our Portfolio*/}


            <div className="sm:text-5xl text-md text-center md:leading-[7rem] mt-[4rem] mb-[7rem] " >
                    Our Portfolio

                </div>















        </>
    );
}

