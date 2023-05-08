import React from "react";
import './App.css';

import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header id="Header" /> 
      <Contents id="Contents" />
      <Footer id="Footer" />
    </div>
  );
}

export default App;
