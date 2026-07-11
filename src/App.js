import Stack from "./pages/Stack/Stack";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { loadSeasonalEffects, cleanupSeasonalEffects } from "./pages/Pricing Layout/seasonalEffects";

const App = () => {

  useEffect(() => {
    loadSeasonalEffects();
    return () => cleanupSeasonalEffects();
  }, []);

  return (
    <Loader minDuration={4600}>
      <Analytics />
      <SpeedInsights />
      <Stack />
    </Loader>
  );
};

export default App;