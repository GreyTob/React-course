import React, { Component} from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {
  render() {
    const st = {
      textAlign: 'center',
    }

    return (
      <div className="App" style={st}>
        <h1>Hello world!</h1>

        <Car name={'Ford'} year={2018}>
          <p style={{color: 'blue', opacity: '.2', fontWeight: 'bold'}}>COLOR</p>
        </Car>
        <Car name='Audi' year={2016}>
          <p style={{color: 'red'}}>COLOR</p>
        </Car>
        <Car name='Mazda' year={2010}/>
      </div>

    )
    // return React.createElement(
    //   //формируем код: <div className="App">  <h1>Hello world!</h1> </div>
    //   'div',
    //   {
    //     className: 'App',
    //   },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Hello world!'
    //   ),
    //
    // )
  }
}

export default App
