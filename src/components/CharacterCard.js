import React from "react";

const CharacterCard = props =>  {
  // const {name, image, id, gender, location, species, status} = character;
  return (
    <section className='statCard'>
      <h2>{props.name}</h2>
      <img src={props.image} alt='profile of character'/>
      <div className='stats'>
        {/* <p>Id: {key}</p> */}
        <p>Gender: {props.gender}</p>
        <p>Location: {props.location.name}</p>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
      </div>
    </section>
  );
}

export default CharacterCard;
