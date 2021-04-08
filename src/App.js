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

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
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
        <input type="text" onChange={this.handleInput}/>

        <button
          onClick={this.changeTitleHandler.bind(this, 'changed!')}
        >change page title</button>

        <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTItle={this.changeTitleHandler.bind(this, cars[0].name)} />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTItle={() => this.changeTitleHandler(cars[1].name)} />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTItle={this.changeTitleHandler.bind(this, cars[2].name)} />
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
