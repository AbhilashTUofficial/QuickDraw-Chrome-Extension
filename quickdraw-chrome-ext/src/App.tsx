import React from 'react';
import './App.css';
import './Components/Tiles/Tiles.js'
import './Components/SearchBar/SearchBar.css'
import Grid from './Components/Tiles/Tiles.js';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <>
    <head>
  <title>Component-style Page</title>
</head>
<body>
  <header className="sticky-header">
    <h1>Quick Draw Chrome Extension</h1>
  </header>

  <main>

  <SearchBar/>
      <Grid/>
  </main>
</body>
    </>
  );
}

export default App;
