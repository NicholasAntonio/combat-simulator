import { useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList/characterList';


function App() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    initiative: '',
    image: null
  });

  const handleAddCharacter = () => {
    if (newCharacter.name && newCharacter.initiative && newCharacter.image) {
      setCharacters([...characters, newCharacter].sort((a, b) => b.initiative - a.initiative));
      setNewCharacter({
        name: '',
        initiative: '',
        image: null
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'file') {
      const image = event.target.files[0];
      setNewCharacter(prevCharacter => ({
        ...prevCharacter,
        [name]: image
      }));
    } else {
      setNewCharacter(prevCharacter => ({
        ...prevCharacter,
        [name]: value
      }));
    }
  };

  return (
    <div className="App">
      <h1>RPG Combat Simulator</h1>
      <div className="character-form">
        <input type="text" name="name" placeholder="Name" value={newCharacter.name} onChange={handleInputChange} />
        <input type="number" name="initiative" placeholder="Initiative" value={newCharacter.initiative} onChange={handleInputChange} />
        <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
        <button onClick={handleAddCharacter}>Add Character</button>
      </div>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
