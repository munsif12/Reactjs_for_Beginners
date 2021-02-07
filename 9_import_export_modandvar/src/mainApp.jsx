import React from "react";
import { /*topic ,*/ ExpList, ExpDefination, SumDefination, sum, ImportExp, theEnd } from './impExp';//the warning is bcoz i am not using topic anywhere insted i am using dot operator to use it 
import * as importExport from "./impExp";//if you doont want to wrtie upper import statmetent
function mainApp() {
    return (
        <>
            <h1>{importExport.topic}</h1>
            <ExpList />
            <ExpDefination />
            <SumDefination />
            <p>{sum()}</p>
            <ImportExp />
            <h1>{theEnd}</h1>

        </>
    )
}

export default mainApp;
