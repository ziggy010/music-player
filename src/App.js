import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [allSongs, setAllSongs] = useState(data());
  const [currentSong, setCurrrentSong] = useState(allSongs[0]);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
      <Library allSongs={allSongs} />
    </div>
  );
}

export default App;
