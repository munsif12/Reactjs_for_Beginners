import React from "react";
const topic = " =>> Export Component Function Var etc";

function ExpList() {
    return (
        <>
            <p> Export is use to : Export your jsx components, simple functions and variabls which are built seperatly</p>
            <p style={{ color: "white", background: "black" }}>MUST TO KNOW : Your components name must start with a capital letter else you will get an error</p>
            <ol>
                <li>Exporting Function with a List</li>
            </ol>
        </>
    )
}
function ExpDefination() {
    return (
        <>
            <p>
                <ol>
                    <li>EXPORT default varName<em style={{ color: 'green' }}> {'//'} you can only set one item to default </em> </li>
                    <li>export {'{'}varName1,funcName1,varName2{'}'} <em style={{ color: 'green' }}> {'//'} exporting as a form of Objects and while importing name must be same as exported names</em> </li>
                </ol>
            </p>
        </>
    )
}
function sum() {
    return (4);
}
function SumDefination() {
    return (
        <p> Simple JSX component which is using a sum {sum} function</p>
    )
}
function ImportExp() {
    return (
        <>
            <h1> =>> Import Components ,var and func</h1>

            <p>if you dont want to write
            <ol>
                    <li>import {'{'} topic, ExpList, ExpDefination, SumDefination, sum, theEnd {'}'} from './impExp';</li>
                    <li>Insted of this you can write
                    <ul>
                            <li>import * as objName from "./filename"</li>
                            <li>Then use the dot operator like obj.functionName to access the component ,functions and variables</li>
                            <li>because export function is returning  object so you can also destructire it to get only required values</li>
                        </ul>
                    </li>
                </ol>
            </p>
        </>
    )
}
const theEnd = "The End";
// export default expDefination;
export { topic, ExpList, ExpDefination, SumDefination, sum, ImportExp, theEnd };
