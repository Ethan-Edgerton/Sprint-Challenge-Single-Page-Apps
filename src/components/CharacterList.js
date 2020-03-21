import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledP = styled.p`
  color: black;
  font-size: 30px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState("");
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(response => {
        console.log(response.data);
        setChar(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [search]);

  const handleChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`submitting Name: ${search}`);
  };

  return (
    <section className="character-list">
      <Link to="/">
        <StyledP>Home</StyledP>
      </Link>

      <SearchForm
        placeholder="search characters"
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {char.map(chars => {
        return (
          <CharacterCard
            name={chars.name}
            gender={chars.gender}
            species={chars.species}
            status={chars.status}
            image={chars.image}
          />
        );
      })}
    </section>
  );
}
