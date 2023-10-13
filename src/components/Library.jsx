import React, { useState } from "react";
import LibrarySongs from "./LibrarySongs";
import styled from "styled-components";

const Library = ({ allSongs, setCurrentSong, currentSong, libraryStatus }) => {
  return (
    <LibraryContainer status={libraryStatus}>
      <h2>Library</h2>
      {allSongs.map((value) => {
        return (
          <LibrarySongs
            allSongs={allSongs}
            song={value}
            key={value.id}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
          />
        );
      })}
    </LibraryContainer>
  );
};

export default Library;

const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 2px 2px 50px gray;
  width: 20rem;
  height: 100%;
  overflow: scroll;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.status ? "translateX(0%)" : "translateX(-100%)"};
  opacity: ${(props) => (props.status ? 1 : 0)};
  h2 {
    padding: 2rem;
  }
`;
