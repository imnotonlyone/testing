import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>APP COUNTER REACT</h1>
      <h1>{counter}</h1>
      <button>Tambah</button>
    </div>
  );
}

export default App;
