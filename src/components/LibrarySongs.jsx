import React from "react";
import styled from "styled-components";

const LibrarySongs = ({ song, currentSong, setCurrentSong, allSongs }) => {
  function changeSongHandler() {
    const selectedSong = allSongs.filter((value) => {
      return value.id === song.id;
    });

    setCurrentSong(selectedSong[0]);
  }

  return (
    <LibrarySongContainer
      onClick={changeSongHandler}
      selected={song.id === currentSong.id}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </LibrarySongContainer>
  );
};

export default LibrarySongs;

const LibrarySongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem 1rem 2rem;
  cursor: pointer;
  transition: background 0.5s ease;
  background-color: ${(props) => (props.selected ? "#18122B" : "black")};

  &:hover {
    background: #393053;
  }

  img {
    width: 25%;
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
