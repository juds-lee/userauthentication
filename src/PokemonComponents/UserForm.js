import { useState } from "react";
import DisplayResults from "./DisplayResults";

const UserForm = (props) => {
    const [text, setText] = useState("");
    let displayedPokemon = props.pokemon.name
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setUserInput("")
        props.setUserInput(text)
        if( text == displayedPokemon) {
            // create array to display in our pokedex
            // toggle to colored ver on correct answer
            props.setCorrectArr([props.pokemon, ...props.correctArr])
            props.setIsColor(!props.isColor)
        }
        setText("") 
    }
    // save text input to variable
    const handleUserInput = (e) => {
         setText(e.target.value)        
    }

    // creating a hint variable and toggler
    const handleHint = (e) => {
         props.setHint(!props.hint) 
    }
 
    return(
    <section>
        <div className="submitGuess">
           <form 
           onSubmit={handleSubmit}
           >
               <label htmlFor="submitGuess"></label>
               <input
                type="text" 
                className="answerText"
                name="userSubmission" 
                id="userSubmission"
                onChange={(e)=>{handleUserInput(e)}}
                value={text}
                placeholder="Who's that Pokemon?" 
                required
                />
             <button  className="submitButton" type="submit">Submit</button>
           </form>
        </div>
            <div className="resultsBar">
                <div className="displayResults">
                    <DisplayResults 
                        pokemon={props.pokemon}
                        userInput={props.userInput} 
                        correctArr={props.correctArr}
                        displayedPokemon={displayedPokemon} 
                        setIsColor={props.setIsColor}
                        isColor={props.isColor}
                        hint={props.hint}
                        setHint={props.setHint}
                    />
                </div>
                <div className="hintButton">
                    <button onClick={(e)=>{handleHint(e)}}className="hint">HINT</button>
                </div>
            </div>
            
        
    </section>
       
    )
} 


export default UserForm;