import React from "react";
import LibrarySongs from "./LibrarySongs";
import styled from "styled-components";

const Library = ({ allSongs, currentSong, setCurrentSong, libraryStatus }) => {
  return (
    <LibraryContainer status={libraryStatus}>
      <h1>library</h1>
      {allSongs.map((value) => {
        return (
          <LibrarySongs
            key={value.id}
            song={value}
            allSongs={allSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
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
  width: 20rem;
  height: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  overflow: scroll;
  background-color: #0a0a0a;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.status ? `translateX(0%)` : `translateX(-100%)`};
  opacity: ${(props) => (props.status ? 1 : 0)};
  h1 {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
