
function PropsBody(props) {
    return (
        <div className="card">
            <h2 >Hello {props.name}</h2>
            <img src={props.imgSrc} alt="pic" srcset="" />
            <h5>Card no {props.number}</h5>
        </div>
    )
}

export default PropsBody
