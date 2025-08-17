import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Stack from "./pages/Stack/Stack";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX"); // replace with your ID
    ReactGA.send("pageview"); // log first page load
  }, []);
  
  return (
    <>
    <Analytics/>
    <SpeedInsights /> 
    <Stack />
    </>

  );
};

export default App;
