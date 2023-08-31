import CharacterCard from "../CharacterCard/characterCard";


const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          name={character.name}
          initiative={character.initiative}
          image={URL.createObjectURL(character.image)} 
        />
      ))}
    </div>
  );
};

export default CharacterList;
