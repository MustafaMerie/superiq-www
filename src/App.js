import React from "react";
import Header from "./components/header/Index";
import Intro from "./components/intro/Index";
import Journeys from "./components/journeys/Index";
import Stories from "./components/stories/Index";
import WhatIsSuperiq from "./components/what-is-superiq/Index";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WhatIsSuperiq />
      <Stories />
      <Journeys />
    </>
  );
}

export default App;
