import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";
// import { Breakpoint, BreakpointProvider } from 'react-socks';
import "../app/globals.css";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
