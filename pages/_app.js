import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r  to-[#757F9A] from-[#bbc0c9]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
