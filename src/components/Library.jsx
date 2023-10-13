import React from "react";
import LibrarySongs from "./LibrarySongs";
import styled from "styled-components";

const Library = ({ allSongs }) => {
  return (
    <LibraryContainer>
      <h1>library</h1>
      {allSongs.map((value) => {
        return <LibrarySongs song={value} />;
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
  h1 {
    padding: 2rem;
  }
`;
