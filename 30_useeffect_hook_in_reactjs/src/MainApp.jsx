import React, { useState, useEffect } from "react";

function MainApp() {
  var [count, setCount] = useState(0);
  var [count2, setCount2] = useState(0);
  function onclickCount() {
    setCount(++count);
  }
  function onclickCount2() {
    setCount2(++count2);
  }
  /*agr kisi state ko change krwany ka bad koi action perform krwana ho to useEffect use hota ha */
  useEffect(() => {
    alert("this is useEffect");
  }, [count]); //jis state ke value change hony ka bad ab useEffect perform krwanan chhty ho
  // woh vllue array ma include hoge
  return (
    <div className="mainapp">
      <div className="heading">
        <h1>UseEffect Hook</h1>
      </div>
      <p>
        <ul>
          <li style={{ color: "blue", fontSize: "18px", fontWeight: "bolder" }}>
            ABOUT USEEFFECT HOOK :-
          </li>
          <li>
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we'll refer to it as our “effect”), and call it later after
            performing the DOM updates.
          </li>
          <li>
            React has a built-in hook called useEffect. Hooks are used in
            function components. The Class component comparison to useEffect are
            the methods componentDidMount , componentDidUpdate , and
            componentWillUnmount . useEffect will run when the component
            renders, which might be more times than you think.
          </li>
          <li>
            agr kisi ( state ko change ya render krwany ka bad ) koi action
            perform krwana hote UseEfect hota h.
          </li>
          <li>jab b render function call hoga tab useEffect call hoga</li>
          <li style={{ color: "blue", fontSize: "18px", fontWeight: "bolder" }}>
            Examples :-
          </li>
          <li>
            agr ham useEffect ke array value nhi dangay to functional component
            ma koi b state render hony ka bad useEffect run hoga
          </li>
          <li style={{ color: "blue" }}>
            {"useEffect(  () => { "} <br />
            {" alert(` this is useEffect` ); "} <br />
            {"} );"}
          </li>
          <li>
            agr ham useEffect ke array value null dangay to useEffect sirf 1
            dafa chally ga woh b page ka refresh hony pa{" "}
          </li>
          <li style={{ color: "blue" }}>
            {"useEffect(  () => { "} <br />
            {" alert(` this is useEffect` ); "} <br />
            {"} ,[ ]);"}
          </li>
          <li>
            example {"=>"} ab ma button 1 ka click hony ka bad alert msg show
            krwana chahta ho lakin button 2 ka click pa kuch na ho to uska leya
            useEffect ka array [] ma apko batana hoga ka kis state ka change
            hony pa ab useEffect ka method ko chalana chahty ho
          </li>
          <li style={{ color: "blue" }}>
            {"useEffect(  () => { "} <br />
            {" alert(` this is useEffect` ); "} <br />
            {"} ,[count]); //state name of value"}
          </li>
        </ul>
      </p>
      <div className="buttons">
        <button
          onClick={onclickCount}
          style={{ height: "50px", width: "200px" }}
        >
          {"Button 1 =>"} Click me {count}
        </button>
        <button
          onClick={onclickCount2}
          style={{ height: "50px", width: "200px" }}
        >
          {"Button 2 =>"} Click me {count2}
        </button>
      </div>
    </div>
  );
}

export default MainApp;
