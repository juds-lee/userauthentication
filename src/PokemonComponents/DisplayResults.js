import React from 'react'

const DisplayResults = ({userInput, displayedPokemon} ) => { 
    if (!userInput) {
        return(
            <div>Results</div>
        )
    } else if (userInput && userInput === displayedPokemon){
        return(
        <div>Correct!</div>
        )
    }else if (userInput && userInput !== displayedPokemon){
        return(
          <div>Try Again</div>
        )
        
    }
}

export default DisplayResults;