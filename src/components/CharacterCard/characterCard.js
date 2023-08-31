
const CharacterCard = ({ name, initiative, image }) => {
  return (
    <div className="character-card">
      <img src={image} alt={`${name} avatar`} />
      <div className="character-info">
        <h3>{name}</h3>
        <p>Initiative: {initiative}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
