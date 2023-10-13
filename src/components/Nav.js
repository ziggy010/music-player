import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Nav = ({ setLibraryStatus }) => {
  return (
    <NavContainer>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus((prev) => !prev)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: transparent;
    border: 2px solid black;
    border-radius: 4px;
    padding: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
