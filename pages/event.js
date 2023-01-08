import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import Meta from "../components/Meta";
import { Nav } from "../components/Nav";

export default function event() {


  return (
    <>
      <Meta title="Book Event" />
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <Nav />

      {/* Calendly inline widget begin  */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/uinvented?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "630px"}}
      > </div>
      {/* <!-- Calendly inline widget end --> */}
      <Footer/>
    </>
  );
}
