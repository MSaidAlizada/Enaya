import React, { useState } from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard/SearchCard.js";
import { Grid } from "@mui/material";
// Styled components for Search container and input/button
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hidden, setHidden] = useState(false);
      
  const handleSearch = async () => {
    if (searchQuery === "Hamad Hospital") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  return (
    <SearchContainer>
      <h2>Search Patients</h2>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter hospital name..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>

      <div>
        {hidden ? (
          <Grid container spacing={2} sx={{ justifyContent:"center", }}>
            <Grid item xs={8}>
              <SearchCard name="Fatima Khalid" hospital="Hamad Hospital" linkT="/patient/1"/>
            </Grid>
            <Grid item xs={8}>
              <SearchCard name="Ahmad Abdullah" hospital="Hamad Hospital" linkT="/patient/2"/>
            </Grid>
          </Grid>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </SearchContainer>
  );
}

export default Search;
