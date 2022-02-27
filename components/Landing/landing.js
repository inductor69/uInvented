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
                        <div className="text-5xl text-center" style={{ lineHeight: "4rem" }}>
                            Award-Winning Mobile and  AR<br /> Development Company
                        </div>
                        <div className="text-2xl text-center" style={{ lineHeight: "4rem" }}>
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

                    <div class="flex-none w-14 h-14 ml-2" style={{ width: '90px', height: '40px', position: 'relative' }}>

                        <Image
                            src="/images/line-sm.svg" // Route of the image file
                            layout="fill"
                            alt="Landing"
                        />

                    </div>
                    <div class="flex-initial w-64 text-2xl ml-1">
                    How we deliver

  </div>
                </div>
                <div class="w-5/6">

                <div className="  text-5xl mx-14 mb-14">
                We design compelling Brand Identities and impactful Digital Experiences for innovative companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprint, we've developed a highly optimised design delivery process that brings results in just a few weeks. Sounds like what you’re looking for?
                </div>
                </div>
            </div>


        </>
    );
}
