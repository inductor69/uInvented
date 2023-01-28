import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import Wave from "../components/Wave";
import { Footer } from "../components/Footer";
import Meta from "../components/Meta";

export default function AboutUs() {
  return (
    <>
      <Meta title="Terms & Conditions" />
      <Nav />
    <Wave index={0}/>

      <div className="flex flex-col  bg-black text-white ">
        <div className="flex flex-col md:mx-[3rem] mx-8 items-center justify-center ">
          <div className="md:text-6xl text-4xl md:mt-[4rem]">
            <div className="py-1">Terms & Conditions.</div>
          </div>

        </div>
      </div>
      <Wave index={1}/>


      <div className="flex flex-col md:mx-[3rem] mx-8  ">
        <div className="sm:text-2xl text-md text-left  text-[#575757] mt-[2rem] ">
        Acceptance of these terms of use<br/><br/>
Use of the Site is subject to the following Terms of Use. By navigating within the Site, or clicking on any object on the Site, you are agreeing to these Terms of Use. We reserve the right to update the Terms of Use at any time as the need arises without any notice to you. You can review the Terms of Use at any time by clicking on the “Privacy and Terms of Use” link at the bottom of this Site’s web pages.
<br/><br/>
Terms of Service, Notices, and Revisions<br/><br/>
If you choose to visit uInvented, your visit and any dispute over privacy are subject to this Notice and our Conditions of Use, including limitations on damages, arbitration of disputes, and application of the law of the state of Pennsylvania. If you have any concerns about privacy at uInvented, please send us a thorough description to aditya.kumar466.ak[@]gmail . com, and we will try to resolve it. Our business changes constantly. This Notice and the Conditions of Use will change also, and the use of information that we gather now is subject to the Privacy Policy in effect at the time of use. You should check our website frequently to see recent changes.<br/><br/>

Newsletters<br/><br/>
We send newsletters to you and will not sell your email address to 3rd parties. You may choose to opt out of the newsletter at any time by following the unsubscribe instructions in each newsletter or by contacting us directly. By default, all contact from our website is entered into our CRM and newsletter distribution list. If you would prefer not to be added to our email distribution list, please specify this in the body of the email or contact form submission to us.<br/><br/>

Phone calls<br/><br/>
When you are in contact with us by phone the call may be monitored or recorded for quality assurances purposes. Your continued participation in any telephone conversation serves as express consent to be monitored or recorded.
<br/><br/>
Copyright and trademarks<br/><br/>
The content included on the https://uInvented.com/ site – including all text, images, videos and other media, as well as the design and styling of all content – are exclusively owned by uInvented. or by third parties who have given their permission for use by uInvented. Copyright by uInvented. or such third parties of all such content is explicit by its appearance on the https://uInvented.com/ site.
<br/><br/>
Permitted use<br/><br/>
Visitors to this website are granted permission to access this material, to download and copy such material onto electronic, magnetic, optical or similar storage media and to make printed copies of any such downloaded material, provided that such activities and copies are for non-commercial use only and that the following conditions are met:
<br/><br/>
You may link to https://uInvented.com/ using appropriate text such as “… as found on https://uInvented.com/” or by seeking permission for the link<br/><br/>
Your use may not be obscene or defamatory or libelous to https://uInvented.com/ or uInvented.<br/><br/>
You must properly cite https://uInvented.com/ as the source.<br/><br/>
This website is intended for uInvented’s customers and prospective customers and is not intended for use by the general public. uInvented provides services to businesses and organizations only.<br/><br/>

Restricted use<br/><br/>
Visitors to this website may not copy, distribute, screenshot, reproduce, sell or publish any of the copyright material downloaded or copied from this website. For the avoidance of doubt, no permission is given for the transfer of any of this material to an open internet site. For permission, please contact aditya.kumar466.ak[@]gmail . com. uInvented monitors the web closely for violations of our use policy. Design Trademarks or stylized versions of Trademarks are not permitted for use except by written permission from uInvented.<br/><br/>

Reporting violations<br/><br/>
If you become aware of any violations of Copyrights, Trademarks or other Intellectual Property in connection with the Site, whether owned by the Site Owners or Third Parties, please contact:<br/><br/>

uInvented<br/><br/>

New Delhi-110016, India<br/><br/>
        </div>
      </div>

      <Wave index={0}/>

      <Footer />
    </>
  );
}
