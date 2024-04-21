import { useState } from "react";

export default function Player(prop) {
  const [playerName, setPlayerName] = useState(prop.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  const changing = () => {
    setIsEditing((isEditing) => {
      return !isEditing;
    });
    if (isEditing) {
      prop.onChangeName(prop.symbol, playerName);
    }
  };

  return (
    <li className={prop.isActive ? "active" : undefined}>
      <span>
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{prop.symbol}</span>
      </span>
      <button onClick={changing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
