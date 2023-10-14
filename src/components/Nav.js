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
    border: 2px solid #443c68;
    padding: 0.7rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #443c68;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      z-index: 10;
    }
  }
`;
