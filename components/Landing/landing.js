import Link from "next/link";
import Image from 'next/image'
import { fill } from "tailwindcss/defaultTheme";



export default function Landing() {

    return (
        <>
            <main className="">
                <div className="container mx-auto my-16">
                    {/*center the text */}
                    <div className="flex flex-col items-center justify-center ">
                        <div className="md:text-8xl text-6xl text-center md:leading-[7rem] leading-[4rem] ">
                            <div className="py-1">Designing the</div>
                            <div className="py-1 pb-6">Digital World</div>
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
                    <div className="flex flex-col items-center justify-center" >
                        <div style={{ maxWidth: '900px', width: '90%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/images/top.svg" // Route of the image file
                                width="200%" height="100%" layout="responsive"
                                alt="Your Name"
                                objectFit='contain'

                            />
                        </div>
                    </div>

                </div>
            </main>
            {/*SERVICES*/}
            <div className="flex flex-col  bg-black text-white ">
                <div class="flex mt-5 mb-5">

                    <div class="flex-none w-14 h-14 ml-2 mt-3" style={{ width: '90px', height: '40px', position: 'relative' }}>

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
                <div class="w-full md:w-5/6">

                    <div className="  text-3xl md:text-5xl mx-8 md:mx-14 mb-14">
                        We design compelling Brand Identities and impactful Digital Experiences for innovative companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprint, we've developed a highly optimised design delivery process that brings results in just a few weeks. Sounds like what you’re looking for?
                    </div>
                </div>
                {/*Our Workflow*/}
                <div className="flex flex-col  mt-8  bg-black text-white ">

                    <div className="text-5xl md:text-8xl mx-6  md:mx-14 mb-8">
                        Experiences
                    </div>
                    <div className="text-2xl md:text-3xl mx-6 md:mx-14 mb-14">
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


            <div className="sm:text-5xl text-white bg-black  text-md text-center md:leading-[7rem]  " >
                Our Portfolio

            </div>

            <div class="h-screen bg-black  ">
                <div class="  border-2  rounded-[4rem] bg-[#FFFBE9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:duration-700	 mx-10  ">
                    <div class=" mx-auto px-4  flex flex-col lg:flex-row">
                        <div class=" container relative lg:w-2/3 rounded-full p-16 ">
                            <p class="max-w-md text-3xl md:text-6xl font-semibold">Checkstep</p>
                            <p class="max-w-md pr-10 text-secondary md:text-3xl font-semibold mt-8">The Checkstep metaverse - a thriving, hate-free digital world</p>
                            <Link href="#" passHref>

                                <button href="#" class="border mt-20 px-8 py-2 rounded  hover:border-black bg-black hover:bg-white  text-white hover:text-black transition duration-500 font-bold">Case Study</button>
                            </Link>
                            <div class="absolute bottom-5 right-5 flex">
                                <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-white">
                                    <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                                </a>
                                <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
                                    <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div class=" mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-16">
                        <div  style={{ maxWidth: '900px', width: '90%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/images/top.svg" // Route of the image file
                                 layout="fill"
                                alt="Your Name"
                                objectFit='fill'


                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}
