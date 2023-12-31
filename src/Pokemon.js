import React, {useState, useEffect} from 'react'
import "./Pokemon.css"
export function Pokemon(props) { 
    const [isAdded, setisAdded] = useState(true);
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }
    function handleTeamJoin() { 
        let newMember = { 
            name: props.name,
            sprite: props.sprite
        }
        props.addTeam(newMember);
        cancelMember()
        // props.removeDisabled()
    }
    function cancelMember() { 
        props.removePokemon(props.name)
        // props.removeDisabled()
        props.changeStatus(false);
    }

    return (
    <>
        <div id="container">
            <div id='left'>
                <div>{toTitleCase(props.name)}</div>
                <div>Height: {props.height}</div>
                <div>Weight: {props.weight}</div>
            </div>
            <div id='right'>
                  <img src={props.sprite} alt={props.name} />  
            </div>
        </div>
        <div id="buttons">
            <button onClick={handleTeamJoin}>
                Add to my Team!
            </button>
            <button id="x"onClick={cancelMember}>
                X
            </button>
        </div>
    </>
    
    );
}