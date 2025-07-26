import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Page2 from "./components/Page2";
import Lenis from "@studio-freight/lenis";

const App = () => {
  // useSmoothScroll();
  return (
    <>
      <div className="w-full min-h-screen">
        <NavBar />
        <Home />
        <Page2 />
      </div>
    </>
  );
};

export default App;
