import React, {useState, useEffect } from "react";
import "./AddPokemonForm.css"
let id = 1;
export function AddPokemonForm(props) { 
    const [text, setText] = useState(""); 
    // const [disabled, setDisabled] = useState(false);
    const handleTextChange = ({target}) => { 
        const { value } = target; 
        setText(value);
    }
    const handleSubmit = async (event) => { 
        event.preventDefault()
        let pokemon = { 
            name: text
        }
        let endpoint = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const response  = await fetch(endpoint)
        if(!response.ok) { 
            alert("Please enter a valid pokemon!");
            return;
        }
        const data = await response.json()
        // console.log(data);
        pokemon["height"] = data["height"]; 
        pokemon["weight"] = data["weight"];
        if (response.moves) {
            pokemon["moves"] = [data["moves"][Math.floor(Math.random() * 100)]['move'], data["moves"][Math.floor(Math.random() * 100)]['move']];
        }
        pokemon["sprite"] = data["sprites"]['front_default'];
        pokemon["id"] = id++;
        console.log(pokemon)
        props.addPokemon(pokemon);
        setText("");
        props.changeStatus(true)
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

            <input type="submit" value="Add" disabled={props.disabled} />
            </form>
        </div>
      );
}