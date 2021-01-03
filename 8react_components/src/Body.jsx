import React from 'react';
function Body() {
    return (
        <ol className="body">
            <li>React componts provides reuseability of code </li>
            <li>EvERY rectangle is a component in a this program</li>
            <li>Create and Export your custem module</li>
            {'import React from react;'}<br />
            { 'function Topic() {'}<br />
            {'return ('}<br />
            {'<h1 className="topic">REACT CPMPONENTS</h1>'}<br />
            {')'}<br />
            {'}'}<br />
            {'export default Topic;'}{'//'} <em style={{ color: 'green' }}>this is how you can export your custem modules</em>
        </ol>
    )
}
export default Body;