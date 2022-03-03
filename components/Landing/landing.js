import Link from "next/link";
import Image from 'next/image'
import { fill } from "tailwindcss/defaultTheme";
import "./landing.module.css"


export default function Landing() {


    return (

        <>
            <main className="">
                <div className="container mx-auto my-16 ">
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
                    <div className="py-8 flex justify-center text-xl space-x-8">
                        <Link href="#" passHref>

                            <a href="#" className="border hover:border-black bg-black hover:bg-[#bbc0c9] rounded py-3 px-8 text-[#bbc0c9] hover:text-black transition duration-500 font-bold">Contact Us</a>
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
            <div className="flex flex-col  bg-black text-[#bbc0c9] ">
                <div className="flex mt-5 mb-5">

                    <div className="flex-none w-14 h-14 ml-2 mt-3" style={{ width: '90px', height: '40px', position: 'relative' }}>

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
                <div className="w-full md:w-5/6">

                    <div className="  text-3xl md:text-5xl mx-8 md:mx-14 mb-14">
                        We design compelling Brand Identities and impactful Digital Experiences for innovative companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprint, we've developed a highly optimised design delivery process that brings results in just a few weeks. Sounds like what you’re looking for?
                    </div>
                </div>
                {/*Our Workflow*/}
                <div className="flex flex-col  mt-8  bg-black text-[#bbc0c9] ">

                    <div className="text-5xl md:text-8xl mx-6  md:mx-14 mb-8">
                        Experiences
                    </div>
                    <div className="text-2xl md:text-3xl mx-6 md:mx-14 mb-14">
                        Digital products, websites and experiences for startups and iconic companies.
                        <ul className="list-disc text-2xl mt-4 mx-6 leading-10">
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



            <div className="text-4xl sm:text-5xl bg-[black] text-[#bbc0c9] text-center py-4 " >
                Our Portfolio
            </div>
            <div className="bg-[black] text-[#FF8E60] p-8 ">
                <div className="flex rounded-[1rem] bg-gradient-to-r from-[#757F9A] via-[#bbc0c9] to-[#757F9A] flex-wrap-reverse md:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.98]  max-w-screen-xl xl:max-w-screen-2xl bg-[#FF8E60] text-black  ">
                    <div className="container  md:p-10 pb-6 px-10 md:py-[5rem]  ">
                        <p className="max-w-md text-4xl md:text-6xl font-semibold">Checkstep</p>
                        <p className="max-w-md  text-secondary text-xl md:text-3xl font-semibold mt-4">The Checkstep metaverse - a thriving, hate-free digital world</p>
                        <Link href="/" passHref>
                            <button href="/" className="border md:mt-14 mt-4 px-8 py-2 rounded hover:border-black md:text-xl text-md bg-black hover:bg-[#bbc0c9]  text-[#bbc0c9] hover:text-black transition duration-500 font-bold">Case Study</button>
                        </Link>
                    </div>
                    <div className=" container md:py-8 px-6 md:py-[4rem]  md:pr-16">
                        <div style={{ minHeight: '13rem', height: '100%', position: 'relative' }}>
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
            <div class="md:grid  grid-cols-2 gap-5 bg-[#000] px-8">
             <div className="bg-black text-[#FF8E60] mb-4   ">
                <div className="flex rounded-[1rem] bg-gradient-to-r from-[#757F9A] to-[#bbc0c9]  flex-wrap-reverse md:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.98]  max-w-screen-xl xl:max-w-screen-2xl bg-[#FF8E60] text-black  ">
                <div className=" container md:py-8 px-6 md:py-[4rem]  md:pr-16">
                        <div style={{ minHeight: '13rem', height: '100%', position: 'relative' }}>
                            <Image
                                src="/images/top.svg" // Route of the image file
                                layout="fill"
                                alt="Your Name"
                                objectFit='fill'
                            />
                        </div>
                    </div>
                    <div className="container  md:p-10 pb-6 px-10   ">
                        <p className="max-w-md text-4xl md:text-6xl font-semibold">Checkstep</p>
                        <p className="max-w-md  text-secondary text-xl md:text-2xl font-semibold mt-4">The Checkstep metaverse - a thriving, hate-free digital world</p>
                        <Link href="/" passHref>
                            <button href="/" className="border md:mt-14 mt-4 px-8 py-2 rounded hover:border-black md:text-xl text-md bg-black hover:bg-[#bbc0c9]  text-[#bbc0c9] hover:text-black transition duration-500 font-bold">Case Study</button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="bg-black text-[#FF8E60]  ">
                <div className="flex rounded-[1rem] bg-gradient-to-r  to-[#757F9A] from-[#bbc0c9] flex-wrap-reverse md:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.98]  max-w-screen-xl xl:max-w-screen-2xl bg-[#FF8E60] text-black  ">
                <div className=" container md:py-8 px-6 md:py-[4rem]  md:pr-16">
                        <div style={{ minHeight: '13rem', height: '100%', position: 'relative' }}>
                            <Image
                                src="/images/top.svg" // Route of the image file
                                layout="fill"
                                alt="Your Name"
                                objectFit='fill'
                            />
                        </div>
                    </div>
                    <div className="container  md:p-10 pb-6 px-10">
                        <p className="max-w-md text-4xl md:text-6xl font-semibold">Checkstep</p>
                        <p className="max-w-md  text-secondary text-xl md:text-2xl font-semibold mt-4">The Checkstep metaverse - a thriving, hate-free digital world</p>
                        <Link href="/" passHref>
                            <button href="/" className="border md:mt-14 mt-4 px-8 py-2 rounded hover:border-black md:text-xl text-md bg-black hover:bg-[#bbc0c9]  text-[#bbc0c9] hover:text-black transition duration-500 font-bold">Case Study</button>
                        </Link>
                    </div>

                </div>
            </div>
            </div>

            {/*Our Testimonials*/}

            <div className="w-full h-full bg-[#000] pb-10 ">
                <div className="sm:text-5xl text-[#bbc0c9] bg-black  text-md text-center md:leading-[7rem]  " >
                    Our Testimonials

                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-4 2xl:row-span-2 2xl:pb-8  ml-2 pt-4 px-6">
                    <div className="bg-[#FF8AAE] lg:order-1 m-2 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div className="mx-6 my-8 2xl:mx-10">
                            <img className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 className="text-[#000] text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Daniel Clifford</h1>
                            <h2 className="text-[#000] text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Verified Graduate</h2>
                        </div>
                        <div className="-mt-6 relative">
                            <p className="text-[#000] text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                            <p className="text-[#000] text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                        </div>
                    </div>

                    <div className="bg-[#DEF6E7] lg:order-2 m-2  lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
                        <div className="mx-8 2xl:mx-10 my-10">
                            <img className="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 className="text-black text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">Jonathan Walters</h1>
                            <h2 className="text-black text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div className="-mt-8 mx-1 lg:mx-2">
                            <p className="text-black text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">The team was very supportive and kept me motivated</p>
                            <br />
                            <p className="text-black text-opacity-50 font-medium md:text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1  2xl:mt-2 2xl:px-8">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
                        </div>
                    </div>

                    <div className="bg-[#FF8E60] lg:order-3 m-2 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
                        <div className="mx-8 my-10 lg:my-8">
                            <img className="w-8 md:w-9 lg:w-11 2xl:w-20 h-8 md:h-9 lg:h-11 2xl:h-20 rounded-full border-2 -mt-3 -ml-1 lg:-ml-0" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Jeanette Harmon</h1>
                            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div className="-mt-4 ml-5 mr-11">
                            <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-bold px-2 lg:px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6">An overall wonderful and rewarding experience</p>
                            <br />
                            <p className="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
                        </div>
                    </div>

                    <div className="bg-[#F9EB7F] m-2  lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl  lg:mb-0 2xl:mb-8 lg:pb-8 2xl:pb-15 ">
                        <div className="mx-8 my-8">
                            <img className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Patrick Abrams</h1>
                            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div className="px-3 -mt-3 mb-5 lg:mb-0">
                            <p className="primary-color-blackish-blue text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
                            <br />
                            <p className="primary-color-blackish-blue-opacity text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 mt-1 lg:-mt-3 2xl:mt-6">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of lgart and amazing people. ”</p>
                        </div>
                    </div>

                    <div className="bg-[#5D8BF4] m-2  lg:row-span-3 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20 ">
                        <div className="mx-8 my-8 lg:pl-1">
                            <img className="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4" src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">Kira Whittle</h1>
                            <h2 className="primary-color-blackish-blue-opacity text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div className="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
                            <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-semibold px-4 lg:px-0 -mt-2 lg:-mt-0">Such a life-changing experience. Highly recommended!</p>
                            <br />
                            <p className="primary-color-blackish-blue-opacity text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 lg:px-0 2xl:px-4 lg:pr-3 mt-2 lg:-mt-1 2xl:mt-2 ">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="w-full h-full bg-[#000]  ">

                <div className="container  mx-auto   ">
                    <div className="mx-auto pb-[4rem] pt-[4rem]">
                        <div className="relative pt-16 px-6 lg:px-24 pb-20 bg-gray-900 rounded-3xl overflow-hidden">

                            <div className="relative">
                                <div className="text-3xl md:text-4xl md:leading-[3.5rem]   text-[#bbc0c9] font-bold  mb-8">Join 20k+ Designers, Founders & Makers</div>

                                <span className="text-base lg:text-lg text-[#bbc0c9] font-bold">More news</span>
                                <h3 className="mt-6 mb-12 text-5xl lg:text-6xl text-[#bbc0c9] font-bold font-heading">Subscribe now!</h3>
                                <div className="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
                                    <span className="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10 ">
                                        <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
                                    </span>
                                    <input className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5  rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email" />
                                    <button className="w-full sm:w-auto ml-auto px-10 py-5 text-[#bbc0c9] font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
                                </div>
                                <p className="text-[#bbc0c9]">
                                    <span>The brown fox jumps over</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer class=" w-full    sm:p-6 bg-[#000]">
                <div class="md:flex md:justify-between  ">
                    <div class="mb-6  mx-[4rem] md:mb-0">
                        <a href="https://uInvented.com" class="flex items-center">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">uInvented</span>
                        </a>
                    </div>
                    <div class="grid mx-[4rem] grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="https://uinvented.com" class="hover:underline">uInvented</a>
                                </li>
                                <li>
                                    <a href="https://uinvented.com/" class="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="https://github.com/" class="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/" class="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 "  />
                <div class="sm:flex sm:items-center sm:justify-between pb-[4rem]  mx-[4rem]">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" class="hover:underline">uInvented™</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </footer>



        </>
    );
}