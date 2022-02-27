import Link from "next/link";
import Image from 'next/image'
import { fill } from "tailwindcss/defaultTheme";



export default function Landing() {
    return (
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
                <div  style={{width: '900px', height: '400px', position: 'relative'}}>

                    <Image
                        src="/images/top.svg" // Route of the image file
                        layout="fill"
                        alt="Your Name"
                    />
                </div>
                </div>

            </div>
        </main>
    );
}
