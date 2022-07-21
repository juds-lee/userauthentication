import React from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';


const PokeDex = (props) => {
  const [sprites, setSprites] = useState([]);
  const [viewCard, setViewCard] = useState([false]);

  function handlePokemonSprites() {
      // axios({
      //   url: `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`,
      //   method: "GET",
      // })
      // .then((response) => {
      //  setSprites(response.data.abilities);
      // // console.log(sprites)
      //  setViewCard(!viewCard);
      // })
      // .catch(err => {
      //   console.log(err, "Something went wrong!")
      // });
  }

  return(
      <div>
        {/* <div className={viewCard? "pokemonCard" : "dontDisplay" }>
          <PokemonCard 
          sprites={sprites}
          pokemon={props.pokemon}
          abilities={props.abilities}
          setAbilities={props.setAbilities}
          />
        </div> */}
        <section>
          <Popup 
              trigger={
              <button 
              className="button pokedex">  
              <img 
              src="/images/pokedex.jpeg" 
              alt="image of a pokedex" 
              className='pokedexImg'
              />
              </button>}
              modal
              nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}></button>
                <div className="header">
                  <h2 className="pokedexHeader">Pokedex</h2>
                </div>
                <div className="pokedexP">
                  <p>Here are the Pokemon you've caught!</p>
                </div>
                <div className="pokedexContent">
                  {props.correctArr.map((pokemon) => {
                    return (
                      <div className='pokemonContainer' key={pokemon.id}>
                        <div 
                        onClick={(e) => {handlePokemonSprites()}}
                        className='pokemonSpritesBox' 
                        >
                        <img
                        className='sprites' 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name}
                        />
                        {pokemon.name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </Popup>
      </section>

    </div>
  )
 
};
export default PokeDex;