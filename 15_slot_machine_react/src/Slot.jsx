import React from 'react'
import True from "./True"
import False from "./False"
function Slot(props) {
    if (props.val1 === props.val2 && props.val2 === props.val3) {
        return (
            <div className="trueSlot">
                <True val1={props.val1} val2={props.val2} val3={props.val3} />
            </div>
        )
    }
    else {
        return (
            <div className="falseSlot">
                <False val1={props.val1} val2={props.val2} val3={props.val3} />
            </div>
        )
    }

}

export default Slot
