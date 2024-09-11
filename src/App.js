import React from "react";
// adding componets
import Song from "./components/Song";
import Player from "./components/Player";
// add styles
import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
