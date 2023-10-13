import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  function updateTimeHandler(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime, duration });
  }

  function formatTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }

  return (
    <PlayerContainer>
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          name=""
          id=""
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>

      <audio
        onTimeUpdate={updateTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  justify-content: space-between;
  align-items: center;

  .time-control {
    display: flex;
    align-items: center;
    width: 50%;

    input {
      width: 100%;
    }

    p {
      padding: 1rem;
    }
  }

  .player-control {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
`;
