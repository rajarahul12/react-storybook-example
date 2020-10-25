import React from "react";
import "./App.css";
import { MaterialButton } from "./Components/Button";
import Header from "./stories/Header";

function App() {
  return (
    <div className="app">
      <Header primary title="React 2.0" />
      <MaterialButton>Material UI Styled</MaterialButton>
    </div>
  );
}

export default App;
