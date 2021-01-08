import React from 'react'
import apiData from "./Arrayofobjects";
import Card from "./Card";

// function multiCardsCallbackMap(val) {
//     return (
//         <Card name={val.name} imgSrc={val.imgSrc} number={val.number} />
//     )
// }
function MainApp() {
    return (
        <>
            <h1>NETFLIX APP </h1>
            <div className="netflixBody">
                {apiData.map((val, index) => { //you can also do it by calling a callback function inside map method
                    return (//key property is use to remove the warning for Each child have to have a key property to deffirentiate from other
                        <Card key={val.id} name={val.name} imgSrc={val.imgSrc} number={index + 1} />
                    )
                })
                }
            </div>
            <h1>The End</h1>
        </>
    )
}

export default MainApp
