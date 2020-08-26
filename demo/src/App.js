import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Badge, Button, Pill, PillsGroup} from "monday-ui-components";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <PillsGroup>
          <Pill label="Days" active />
          <Pill label="Weeks" />
          <Pill label="Months" />
        </PillsGroup>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          a demo of{" "}
          <a href="https://github.com/kaminskypavel/monday-ui-components">
            monday-ui-components
          </a>
          in React
        </p>
        <Badge count={counter} />
        <br />
        <Button
          label="Click Me"
          type="success"
          onClick={() => setCounter(counter + 1)}
        />
      </header>
    </div>
  );
}

export default App;
