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

  onChangeName = (name, index) => {
    console.log(name, index)
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars: cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })
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
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
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

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '10px',
        }}>
        { cars }
        </div>

      </div>

    )
  }
}

export default App
