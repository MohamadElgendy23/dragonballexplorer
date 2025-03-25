import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Planets from "./pages/Planets";
function App() {
  const [toggleLanding, setToggleLanding] = useState<boolean>(true);
  return (
    <>
      <NavBar onPlanetsClicked={() => setToggleLanding(false)} />
      {toggleLanding ? <Landing /> : <Planets />}
    </>
  );
}

export default App;
