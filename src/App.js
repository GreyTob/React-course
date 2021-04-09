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
    showCars: false,
  }

  toggleCarsHandler = () => {
    this.setState( {
      showCars: !this.state.showCars
    } )
  }

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    const st = {
      textAlign: 'center',
      color: 'darkgray'
    }

    let cars = null
    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }

    return (
      <div className="App" style={st}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >toggle cars</button>

        { cars }

      </div>

    )
  }
}

export default App
