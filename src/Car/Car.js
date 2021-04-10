import React from 'react'

export default props => (
  <div style={ {
    border: '1px solid #ccc',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 4px 4px 0 rgba(0,0,0, .14)',
  } }>
     <h3>Car name: {props.name}</h3>
     <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
  </div>
)