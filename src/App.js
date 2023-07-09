import logo from './logo.svg';
import './App.css';
import { AddPokemonForm } from './AddPokemonForm';
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { Pokemon } from './Pokemon';
let teamNum = 0;
function App() {
  const [pokemon, setPokemon] = useState([]); 
  const [team, setTeam] = useState([]);
  function addPokemon(pokemon) { 
    setPokemon(prevPokemon => [pokemon, ...prevPokemon]);
  }
  function addTeam(pokemon) { 
    setTeam(prevTeam => [pokemon, ...prevTeam])
    console.log(team)
  }
  return (
    <div className="App">
      <main>
        <div id="#searchbar">
          <AddPokemonForm addPokemon={addPokemon} /> 
          <div id="holder">
            <div>
            {pokemon.map((p) => (
                 <Pokemon addTeam={addTeam} key={p.id} name={p.name} sprite={p.sprite} moves={p.moves} height={p.height} weight={p.weight}/>
              ))}
            </div>
          </div>
        </div>
        <div id="team">
       
        {team.map((p) => (
                 <div className="teamSlot" key={teamNum++}><img src={p} alt=""></img></div>
              ))}
        </div>
      </main>
    </div>
  );
}

export default App;
