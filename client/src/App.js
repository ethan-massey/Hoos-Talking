import React from "react";
import { Grommet } from "grommet";

import "./App.css";
import NewPost from "./new_post/NewPost";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        <h1>Hoos Talking?</h1>
        <p>Create a post!</p>
        <NewPost />
      </header>
    </Grommet>
  );
}

export default App;
