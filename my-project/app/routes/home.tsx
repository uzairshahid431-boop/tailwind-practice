import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import {Paragraph} from "../Components/Paragraph";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Intro />
      <Paragraph />
    </div>
  );
};

export default App;
