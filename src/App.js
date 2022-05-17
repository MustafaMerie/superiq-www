import React from "react";
import Header from "./components/header/Index";
import Intro from "./components/intro/Index";
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
    </>
  );
}

export default App;
