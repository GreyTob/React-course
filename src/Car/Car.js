import React from 'react'

// function Car () {
//   return (
//     <h3>This is car component</h3>
//   )
// }
// const Car = () => {
//   return <div>This is car component</div>
// }
// const Car = () => (
//   <div>This is car component
//     <strong> test</strong>
//   </div>
// )

export default (props) => (
  <div>
     <h3>Car {props.name}</h3>
     <p>Year: <strong>{props.year}</strong></p>
    {props.children}
  </div>
)