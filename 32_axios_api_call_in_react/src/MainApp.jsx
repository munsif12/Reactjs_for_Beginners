import React, { useState, useEffect } from "react";
import Axios from "axios";
function MainApp() {
  var [Value, setValue] = useState(1);
  const [CharacterName, setCharacterName] = useState();
  const [CharacterMoves, setCharacterMoves] = useState();
  const [CharacterImage, setCharacterImage] = useState();
  useEffect(() => {
    if (Value) {
      async function getApiData() {
        const apiData = await Axios.get(
          `https://pokeapi.co/api/v2/pokemon/${Value}`
        );
        var {
          data: {
            forms: [{ name }],
          },
          data: { moves },
          data: {
            sprites: {
              other: {
                dream_world: { front_default }, //to get the image
              },
            },
          },
        } = apiData;
        setCharacterName(name);
        setCharacterMoves(moves.length);
        setCharacterImage(front_default);
      }
      getApiData();
    }
  });
  return (
    <div className="mainApp">
      <h1>POKEMON INFO USING REACT AXIOS API CALL</h1>
      <div className="name">
        <p>
          I am <span>{CharacterName}</span> and I have{" "}
          <span>{CharacterMoves}</span> moves
        </p>
      </div>
      <div className="CharacterImage">
        <img src={CharacterImage} alt="" srcset="" />
      </div>
      <div className="select">
        <select
          name="select"
          id="select"
          value={Value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
}

export default MainApp;
