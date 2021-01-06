import React from 'react'
import Card from "./Card"
import movieApi from "./arrayOfObjects_likeAPI";
function mainApp() {
    return (
        <>
            <h1> Arrays in Reactjs</h1>
            <div className="cards">
                <Card name={movieApi[0].name} imgSrc={movieApi[0].imgSrc} number={movieApi[0].number} />
                <Card name={movieApi[1].name} imgSrc={movieApi[1].imgSrc} number={movieApi[1].number} />
                <Card name={movieApi[2].name} imgSrc={movieApi[2].imgSrc} number={movieApi[2].number} />
                <Card name={movieApi[3].name} imgSrc={movieApi[3].imgSrc} number={movieApi[3].number} />
                <Card name={movieApi[4].name} imgSrc={movieApi[4].imgSrc} number={movieApi[4].number} />
                <Card name={movieApi[5].name} imgSrc={movieApi[5].imgSrc} number={movieApi[5].number} />
            </div>
            <h1>The End</h1>
        </>
    )
}

export default mainApp
