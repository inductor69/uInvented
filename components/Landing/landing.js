import Link from "next/link";
import Image from 'next/image'
import { fill } from "tailwindcss/defaultTheme";
import "./landing.module.css"


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



            <div className="text-4xl sm:text-5xl bg-black text-[#fffbe9] text-center py-4 " >
                Our Portfolio
            </div>
            <div className="bg-black text-[#fffbe9] p-8 ">
            <div className="flex rounded-[4rem] flex-wrap-reverse md:flex-nowrap md:flex-row mx-auto transition ease-in-out duration-700  hover:scale-[0.98]  max-w-screen-xl bg-[#fffbe9] text-black  ">
                <div className="container  p-10 py-[8rem]  ">
                    <p class="max-w-md text-4xl md:text-6xl font-semibold">Checkstep</p>
                        <p class="max-w-md  text-secondary text-2xl md:text-3xl font-semibold mt-4">The Checkstep metaverse - a thriving, hate-free digital world</p>
                        <Link href="/" passHref>
                            <button href="/" class="border mt-14 px-8 py-2 rounded hover:border-black text-xl bg-black hover:bg-white  text-white hover:text-black transition duration-500 font-bold">Case Study</button>
                        </Link>
                </div>
                <div class=" container py-8 px-6 py-[4rem]  md:pr-16">
                        <div  style={{ minHeight:'15rem', height: '100%' ,position: 'relative' }}>
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

            {/*Our Testimonials*/}

            <div class="w-full h-full bg-[#000] pb-10 ">
            <div className="sm:text-5xl text-white bg-black  text-md text-center md:leading-[7rem]  " >
                Our Testimonials

            </div>
                <div class="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
                    <div class="bg-[#FF8AAE] lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div class="mx-6 my-8 2xl:mx-10">
                            <img class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 class="text-[#000] text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Daniel Clifford</h1>
                            <h2 class="text-[#000] text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Verified Graduate</h2>
                        </div>
                        <div class="-mt-6 relative">
                            <p class="text-[#000] text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                            <p class="text-[#000] text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                        </div>
                    </div>

                    <div class="bg-[#DEF6E7] lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
                        <div class="mx-8 2xl:mx-10 my-10">
                            <img class="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 class="text-black text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">Jonathan Walters</h1>
                            <h2 class="text-black text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div class="-mt-8 mx-1 lg:mx-2">
                            <p class="text-black text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">The team was very supportive and kept me motivated</p>
                            <br />
                            <p class="text-black text-opacity-50 font-medium md:text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
                        </div>
                    </div>

                    <div class="bg-[#FF8E60] lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
                        <div class="mx-8 my-10 lg:my-8">
                            <img class="w-8 md:w-9 lg:w-11 2xl:w-20 h-8 md:h-9 lg:h-11 2xl:h-20 rounded-full border-2 -mt-3 -ml-1 lg:-ml-0" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 class="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Jeanette Harmon</h1>
                            <h2 class="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div class="-mt-4 ml-5 mr-11">
                            <p class="primary-color-blackish-blue text-xl 2xl:text-4xl font-bold px-2 lg:px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6">An overall wonderful and rewarding experience</p>
                            <br />
                            <p class="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
                        </div>
                    </div>

                    <div class="bg-[#F9EB7F] lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
                        <div class="mx-8 my-8">
                            <img class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 class="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Patrick Abrams</h1>
                            <h2 class="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div class="px-3 -mt-3 mb-5 lg:mb-0">
                            <p class="primary-color-blackish-blue text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
                            <br />
                            <p class="primary-color-blackish-blue-opacity text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 mt-1 lg:-mt-3 2xl:mt-6">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of lgart and amazing people. ”</p>
                        </div>
                    </div>

                    <div class="bg-[#5D8BF4] lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen">
                        <div class="mx-8 my-8 lg:pl-1">
                            <img class="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4" src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <h1 class="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">Kira Whittle</h1>
                            <h2 class="primary-color-blackish-blue-opacity text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">Verified Graduate</h2>
                        </div>
                        <div class="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
                            <p class="primary-color-blackish-blue text-xl 2xl:text-4xl font-semibold px-4 lg:px-0 -mt-2 lg:-mt-0">Such a life-changing experience. Highly recommended!</p>
                            <br />
                            <p class="primary-color-blackish-blue-opacity text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 lg:px-0 2xl:px-4 lg:pr-3 mt-2 lg:-mt-1 2xl:mt-2 2xl:pb-64">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Newsletter */}
  <div class="container  mx-auto mt-black mt-[4rem] mb-5">
    <div class="mx-auto ">
      <div class="relative pt-16 px-6 lg:px-24 pb-20 bg-gray-900 rounded-3xl overflow-hidden">

        <div class="relative">
        <div className="text-3xl md:text-4xl md:leading-[3.5rem]   text-[#FFFBE9] font-bold  mb-8">Join 20k+ Designers, Founders & Makers</div>

          <span class="text-base lg:text-lg text-[#FFFBE9] font-bold">More news</span>
          <h3 class="mt-6 mb-12 text-5xl lg:text-6xl text-[#FFFBE9] font-bold font-heading">Subscribe now!</h3>
          <div class="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
            <span class="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10 ">
              <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
            </span>
            <input class="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 bg-[#FFFBE9] rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email"/>
            <button class="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
          </div>
          <p class="text-gray-200">
            <span>The brown fox jumps over</span>
          </p>
        </div>
      </div>
    </div>
  </div>


        </>
    );
}
