import React from "react";
import Header from "./components/header/Index";
import Intro from "./components/intro/Index";
import Journeys from "./components/journeys/Index";
import OurSupport from "./components/our_support/Index";
import Stories from "./components/stories/Index";
import SupportUs from "./components/support_us/Index";
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
      <OurSupport />
      <SupportUs />
    </>
  );
}

export default App;
