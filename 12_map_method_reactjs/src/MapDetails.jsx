import React from 'react'
import array from "./Arrayofobjects"
const values = array.map(val => {
    return `My name is ${val.name} and my ID is  ${val.number} ..`;
});
console.log(values)
function MapDetails() {
    return (
        <>
            <h1>MAP METHOD REACT</h1>
            <ul>
                <li><p>The MAP method creates a new array with the results of calling a Function for every array element</p></li>
                <li><p>The map method call the provided function once for each element in the array</p></li>
                <li>SYNTEX :-
                    <ul>
                        <li>Array.map(function(currentValue,index,array),thisValue){'{'}<br />
                        return value.nameEtc //properties of object <br />
                            {'}'}
                        </li>
                    </ul>
                </li>
                <li>RESULTS:-
                    <ul>
                        <li>
                            <p>
                                {values}
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <h1>The End</h1>
        </>
    )
}

export default MapDetails
