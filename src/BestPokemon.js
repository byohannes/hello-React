import React from "react";

const BestPokemon = () => {
    const abilities=['components', 'props', 'use State','use Effect'];
  return (
  <div>
    <p>My favourite Pokemon is pikachu.</p>
    <p>React hooks main concepts includes :</p>
    <ul>
      {abilities.map((ability,index) =>  
      <li key={index}> {ability} </li>)}
    </ul>
  </div>)
  }

  export default BestPokemon;