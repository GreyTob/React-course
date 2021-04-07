import React, { Component} from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2019},
      {name: 'mazda', year: 2015},
      {name: 'mersedes', year: 2015},
    ],
    pageTitle: 'React components',
  }

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + ' (changed)'

    this.setState = ({
      pageTitle: newTitle
    })
  }

  render() {
    const st = {
      textAlign: 'center',
      color: 'darkgray'
    }

    const cars = this.state.cars

    return (
      <div className="App" style={st}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>change page title</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
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
