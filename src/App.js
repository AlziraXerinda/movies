import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./routes";

const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
};

export default App;
