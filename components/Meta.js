import Head from "next/head";

export default function Meta({ title }) {
  const siteTitle = "uInvented";
  const description = "Developing the Digital World";
  const keywords = "Development";
  const twitter = "@uInvented";
  const image =
    "./images/logo.jpg";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title + " | "+ siteTitle}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content="https://www.uinvented.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <link rel="icon"  href="/favicon.ico" />
    </Head>

  );
}
