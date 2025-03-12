import React from "react";
import Stack from "./pages/Stack/Stack";
import { SpeedInsights } from "@vercel/speed-insights/react";


const App = () => {
  return (
    <>
    <SpeedInsights /> 
    <Stack />
    </>

  );
};

export default App;
