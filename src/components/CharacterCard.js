import React from "react";
import styled from 'styled-components';

const StatCard = styled.section`
    width: 300px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    margin: 15px; 
    padding: 5px;
    background: #fff;
    :hover{
        transform: scale(1.1);
    }
`;

const CardTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
  `;

const CharacterCard = props =>  {
  // const {name, image, id, gender, location, species, status} = character;
  return (
    <StatCard>
      <CardTitle>{props.name}</CardTitle>
      <img src={props.image} alt='profile of character'/>
      <div className='stats'>
        <p>Gender: {props.gender}</p>
        <p>Location: {props.location.name}</p>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
      </div>
    </StatCard>
  );
}

export default CharacterCard;
