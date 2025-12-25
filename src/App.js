import Stack from "./pages/Stack/Stack";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from "react";
import { loadSeasonalEffects, cleanupSeasonalEffects } from "./pages/Pricing Layout/seasonalEffects";

const App = () => {
useEffect(() => {
  loadSeasonalEffects();
  return () => cleanupSeasonalEffects();
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
