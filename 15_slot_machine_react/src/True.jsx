import React from 'react'

function True(props) {
    return (
        <>
            <div className="trueSpans">
                <span>{props.val1}</span>
                <span>{props.val2}</span>
                <span>{props.val3}</span>
            </div>
            <div className="trueSlotResult">
                <h2 style={{ color: "green" }}>This is Matching..</h2>
            </div>
        </>
    )
}

export default True
