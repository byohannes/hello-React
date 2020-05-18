import React from "react";


 
const CaughtPokemon = () => {
    const date=new Date().toLocaleDateString();
    return (
      <p>Caught 5 Pokemon on {date}</p>
    )
  }

  export default CaughtPokemon;