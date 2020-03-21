import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: black;
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border: 3px solid black;
`;

export default function CharacterCard(props) {
  return (
    <StyledDiv>
      <h1>{props.name}</h1>
      <p>{props.gender}</p>
      <p>{props.species}</p>
      <p>{props.status}</p>
      <img src={props.image} alt="Rick and Morty character"></img>
    </StyledDiv>
  );
}
