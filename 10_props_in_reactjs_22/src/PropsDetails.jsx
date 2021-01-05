import React from 'react'

function PropsDetails() {
    return (
        <div class="details">
            <h1>PROPS IN REACT</h1>
            <p>Props are used when you want to use your component multiple diffferent time with multiple different values
                <ul>
                    <li>Props are used when you want to assignt differnet attributes to your component</li>
                    <li>Props are used in react as function parameters </li>
                    <ul>
                        <ul>
                            <li>Props function declaration
                                <ul>
                                    <li>
                                        {' function PropsBody(props) {'}<br />
                                        {'return ('}<br />
                                        {'<div>'}<br />
                                        {'<h2 className="card">Hello {props.name}</h2>'}<br />
                                        {'<img src="https://picsum.photos/200/300" alt="pic" srcset="" />'}<br />
                                        {'</div>'}<br />
                                        {')'}<br />
                                        {'}'}
                                    </li>
                                    <li>export default PropsBody;</li>
                                </ul>
                            </li>
                            <li>Assigning values to props function
                                <ul>
                                    <li>first Import PropsBody</li>
                                    <li>import PropsBody from "./PropsBody";</li>
                                    <li>
                                        {' function MainApp() {'}<br />
                                        {'return ('}<br />
                                        {'<>'}<br />
                                        {'<PropsBody name="Munsif"/>'}<br />
                                        {'<PropsBody name="Hamza"/>'}<br />
                                        {'</>'}<br />
                                        {')'}<br />
                                        {'}'}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                    <li>Components can refer to other components in their output.</li>
                </ul>
            </p>
            <h1> Result Output of Props</h1>
        </div>
    )
}

export default PropsDetails
