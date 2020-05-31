import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import PageController from "./components/pageController/pageController";

function App() {
  const [demo, setDemo] = useState(0);
  return (
    <div className="App">
      <Navbar callback={setDemo} />
      <PageController demo={demo} />
    </div>
  );
}

export default App;
