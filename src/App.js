import logo from './logo.svg';
import './App.css';
import { AddPokemonForm } from './AddPokemonForm';
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { Pokemon } from './Pokemon';
function App() {
  const [pokemon, setPokemon] = useState([]); 
  function addPokemon(pokemon) { 
    setPokemon(prevPokemon => [pokemon, ...prevPokemon]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="#searchbar">
          <AddPokemonForm addPokemon={addPokemon}/> 
          <div id="holder">
            <div>
            {pokemon.map((p) => (
                <Pokemon key={p.id} name={p.name} sprite={p.sprite} moves={p.moves} height={p.height} weight={p.weight}/>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
