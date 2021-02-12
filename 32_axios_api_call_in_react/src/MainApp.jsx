import React, { useState, useEffect } from "react";
import Axios from "axios";
function MainApp() {
  var [Value, setValue] = useState();
  const [CharacterName, setCharacterName] = useState();
  const [CharacterMoves, setCharacterMoves] = useState();
  useEffect(() => {
    async function getApiData() {
      const apiData = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Value}`
      );
      var {
        data: {
          forms: [{ name }],
        },
        data: { moves },
      } = apiData;
      console.log(apiData);
      console.log(name);
      console.log(moves.length);
      setCharacterName(name);
      setCharacterMoves(moves.length);
    }
    getApiData();
  }, [Value]);
  return (
    <div className="mainApp">
      <div className="name">
        {" "}
        I am : {CharacterName} and I have {CharacterMoves} moves
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
        </select>
      </div>
    </div>
  );
}

export default MainApp;
