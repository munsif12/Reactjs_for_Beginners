import React from "react";
function expDefination() {
    return (
        <p>Export is use to export your jsx components or simple functions and variabls which are built seperatly
            <ol>
                <li>Exporting Function with a List</li>
            </ol>
            <ol>
                <li>EXPORT default varName<em style={{ color: 'green' }}> {'//'} you can only set one item to default </em> </li>
                <li>export {'{'}varName1,funcName1,varName2{'}'} <em style={{ color: 'green' }}> {'//'} exporting as a form of Objects and while importing name must be same as exported names</em> </li>
            </ol>
        </p>
    )
}
export default expDefination;