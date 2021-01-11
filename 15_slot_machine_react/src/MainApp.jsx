import React from 'react'
import Slot from "./Slot"
var arrayOfVlues = ["YES", "NO", "YES"];
function array(arrayOfVlues) {
    console.log(Math.floor(Math.random() * arrayOfVlues.length));
    let res = arrayOfVlues[Math.floor(Math.random() * arrayOfVlues.length)];
    console.log(res);
    return (
        res
    )
}
function MainApp() {
    return (
        <>
            <h1>SLOT MACHINE</h1>,
            <div className="Slot">
                <Slot val1={array(arrayOfVlues)} val2={array(arrayOfVlues)} val3={array(arrayOfVlues)} />
                <Slot val1={array(arrayOfVlues)} val2={array(arrayOfVlues)} val3={array(arrayOfVlues)} />
                <Slot val1={array(arrayOfVlues)} val2={array(arrayOfVlues)} val3={array(arrayOfVlues)} />
            </div>,
            <h1>THE END</h1>
        </>
    )
}

export default MainApp
