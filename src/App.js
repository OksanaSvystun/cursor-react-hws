import React, { useState } from "react";

import "./App.css";
import HW17 from "./hw-17/hw-17";
import HW18 from "./hw-18/hw-18";

function App() {
  const [homework, setHomework] = useState();

  return (
    <div className="App">
      <header className="main-header">
        <h1>My react homeworks</h1>
        <div className="btn-container">
          <button
            className="btn btn-danger"
            onClick={() => setHomework(<HW17 />)}
          >
            hw17
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setHomework(<HW18 />)}
          >
            hw18
          </button>
        </div>
      </header>
      <main className="main">{homework}</main>
    </div>
  );
}

export default App;
