import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

// STYLES
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
 `;


 //FUNCTIONS

function CharacterList() {
  const[characters, setCharacters] = useState([])

  useEffect(() => {
  
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response=>{
        const characterData = (response.data.results);
        console.log('Character Data:', characterData);
        setCharacters(characterData);
      }).catch(error=>{
        console.log('Grr', error);
      })
    }
    getCharacters();
  }, []);

  return (
    <>
      <h2>Who the Hell are These People?</h2>
      <CardContainer>
        {characters.map(item=>{
          return <CharacterCard
          key={item.id}
          name={item.name}
          image={item.image}
          status={item.status}
          gender={item.gender} 
          location={item.location} 
          species={item.species}
          />
        })}
      </CardContainer>
    </>
  );
}

export default CharacterList;



//  Important: verify the 2nd `useEffect` parameter: the dependancies array!