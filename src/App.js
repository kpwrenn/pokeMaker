import logo from './logo.svg';
import './App.css';
import { AddPokemonForm } from './AddPokemonForm';
import { Team } from "./Team"
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { Pokemon } from './Pokemon';
let teamNum = 0;
function App() {
  const [pokemon, setPokemon] = useState([]); 
  const [team, setTeam] = useState([]);
  const [teamCounter, setTeamCounter] = useState(0)
  const [disabled, setDisabled] = useState(false)
  function addPokemon(pokemon) { 
    setPokemon(prevPokemon => [pokemon, ...prevPokemon]);
  }
  function addTeam(pokemon) { 
    if (teamCounter === 6) { 
      alert("Your team is already Full!")
      return;
    }
    setTeam(prevTeam => [pokemon, ...prevTeam])
    setTeamCounter(prevCounter => prevCounter + 1);
  }
  function removePokemon(pokemon) { 
    setPokemon(prevPokemon => prevPokemon.filter((p) => p.name !== pokemon))
  }
  function changeStatus(boolean) { 
    setDisabled(boolean)
  }
  function removeTeamMember(pokemon) { 
    setTeam(prevTeam => prevTeam.filter((p) => p.name !== pokemon));
    setTeamCounter(prevCounter => prevCounter - 1);
  }
  return (
    <div className="App">
      <main>
        <div id="#searchbar">
          <AddPokemonForm addPokemon={addPokemon} disabled={disabled} changeStatus={changeStatus}/> 
          <div id="holder">
            <div>
            {pokemon.map((p) => (
                 <Pokemon addTeam={addTeam} key={p.id} name={p.name} sprite={p.sprite} moves={p.moves} height={p.height} weight={p.weight} removePokemon={removePokemon} changeStatus={changeStatus}/>
              ))}
            </div>
          </div>
        </div>
        <div id="team">
       
        {team.map((p) => (
                 <Team teamNum={teamNum++} sprite={p.sprite} name={p.name} removeTeamMember={removeTeamMember}/>
              ))}
        </div>
      </main>
    </div>
  );
}

export default App;
