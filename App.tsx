import { GluestackUIProvider } from "@gluestack-ui/nativewind";
import { Home } from "./Home";

export default function App() {
  return (
    <GluestackUIProvider>
      <Home />
    </GluestackUIProvider>
  );
}
