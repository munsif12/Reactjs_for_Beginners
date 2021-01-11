import React from 'react'

function False(props) {
    return (
        <>
            <div className="falseSpans">
                <span>{props.val1}</span>
                <span>{props.val2}</span>
                <span>{props.val3}</span>
            </div>
            <div className="falseSlotResult">
                <h2 style={{ color: "red" }}>This is Not Matching..</h2>
            </div>
        </>
    )
}

export default False
