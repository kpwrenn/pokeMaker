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
        <AddPokemonForm addPokemon={addPokemon}/> 
        <ul>
        {pokemon.map((p) => (
            <Pokemon key={p.name} pokemon={p.name} sprite={p.sprite}/>
          ))}
        </ul>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
