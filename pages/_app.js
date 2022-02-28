import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#fffbe9]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
