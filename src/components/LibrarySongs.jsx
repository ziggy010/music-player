import React from "react";
import styled from "styled-components";

const LibrarySongs = ({ song, setCurrentSong, allSongs, currentSong }) => {
  function selectSongHandler() {
    const selectedSong = allSongs.filter((value) => value.id === song.id);
    setCurrentSong(selectedSong[0]);
  }
  return (
    <LibrarySongsContainer
      onClick={selectSongHandler}
      selected={currentSong.id === song.id}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </LibrarySongsContainer>
  );
};

export default LibrarySongs;

const LibrarySongsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "lightcoral" : "white")};

  &:hover {
    background-color: lightpink;
  }

  img {
    width: 30%;
  }

  .song-info {
    padding-left: 1rem;

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.7rem;
    }
  }
`;
