import React, { useState, useEffect } from 'react';
import './Tiles.css';
const Grid = () => {
  const [tiles, setTiles] = useState([]);
  const colors = ['#FFD700', '#00FF00', '#00BFFF', '#FF1493', '#FF4500', '#8A2BE2'];

  useEffect(() => {
    const generateTiles = () => {
      const generatedTiles = colors.map((color, index) => (
        <div key={index} className="tile" style={{ backgroundColor: color }}>
          <h2>Tile {index + 1}</h2>
        </div>
      ));
      setTiles(generatedTiles);
    };

    generateTiles();
  }, []);

  return <div className="grid" id="grid-container">{tiles}</div>;
};

export default Grid;
