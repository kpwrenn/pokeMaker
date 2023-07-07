import React, {useState, useEffect } from "react";
import "./AddPokemonForm.css"
export function AddPokemonForm(props) { 
    const [text, setText] = useState(""); 
    const handleTextChange = ({target}) => { 
        const { value } = target; 
        setText(value);
    }
    const handleSubmit = (event) => { 
        event.preventDefault()
        setText("");
    }
    return (
        <div>
            <h1>Pokemaker</h1>
            <form onSubmit={handleSubmit} className="AddPokemonForm">

            <input
                onChange={handleTextChange}
                value={text}
                type="text"
                aria-label="Add your favorite pokemon here!"
                placeholder="Add your favorite pokemon here!"
                id="addPokemon"
            />
            <input type="submit" value="Add"/>
            </form>
        </div>
      );
}