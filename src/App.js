import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";
import styled from "styled-components";

function App() {
  const [allSongs, setAllSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(allSongs[0]);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <AppContainer status={libraryStatus}>
      <Nav setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        allSongs={allSongs}
      />
      <Library
        allSongs={allSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  transition: all 0.5s ease;
  margin-left: ${(props) => (props.status ? "30%" : "0%")};
`;
