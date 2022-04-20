import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const tambah = () => {
    if (counter < 10) {
      let newCounter = counter + 1;
      setCounter(newCounter);
    }
  };

  const kurang = () => {
    if (counter > 0) {
      let kurangCounter = counter - 1;
      setCounter(kurangCounter);
    }
  };

  return (
    <div className="App">
      <h1>APP COUNTER REACT</h1>
      <h1>{counter}</h1>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
    </div>
  );
}

export default App;
