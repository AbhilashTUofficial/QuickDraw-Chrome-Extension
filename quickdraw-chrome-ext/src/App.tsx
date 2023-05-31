import React from "react";
import "./App.css";
import "./Components/Tiles/Tiles.jsx";
import "./Components/SearchBar/SearchBar.css";
import Grid from "./Components/Tiles/Tiles.jsx";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <head>
        <title>Component-style Page</title>
      </head>
      <body>
        <Header />
        <main>
          <SearchBar />
          <div style={{'maxWidth':'612px ;align-items": "center' }}>
          <h3 style={{'textAlign':'start'}}>Bookmarks</h3>
          </div>
          <Grid />
          <h3>Bookmarks</h3>

        </main>
      </body>
    </>
  );
}

export default App;
