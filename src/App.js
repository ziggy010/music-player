import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [allSongs, setAllSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(allSongs[2]);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div>
      <Nav setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
      <Library
        allSongs={allSongs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
