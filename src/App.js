import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Stack from "./pages/Stack/Stack";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

const App = () => {


  return (
    <>
    <Analytics/>
    <SpeedInsights /> 
    <Stack />
    </>

  );
};

export default App;
