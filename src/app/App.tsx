import { StatusBar } from "expo-status-bar";
import { Navigation } from "./routes";

export const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
};
