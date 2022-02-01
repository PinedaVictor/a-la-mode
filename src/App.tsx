import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="">
        <p>Dreamlike using VITE</p>
      </header>
    </div>
  );
}

export default App;
