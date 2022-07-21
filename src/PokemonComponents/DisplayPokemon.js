const DisplayPokemon = ({pokemon, isColor, hint}) => {
    // conditional to render your results upon guess
    let newClass = "guessPokemon";
    if (isColor || hint) {
        newClass = null
        }

    if (!pokemon.sprites){
        return (
        <div className="displayPokemon">
            loading...
        </div>
        );

    } return(
        <div className="displayPokemon">
            <img className={`pokemonimg ${newClass}`} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
        </div>
    )
}
export default DisplayPokemon;

