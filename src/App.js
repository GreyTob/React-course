import React, { Component} from 'react'
import classes from './App.module.scss'
import Car from './Car/Car'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import Counter from "./Counter/Counter"
import PropTypes from "prop-types"

class App extends Component {

  constructor(props) {
   // console.log('App constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2019},
        {name: 'mazda', year: 2015},
        {name: 'mersedes', year: 2015},
      ],
      pageTitle: 'React components',
      showCars: false,
    }
  }


  toggleCarsHandler = () => {
    this.setState( {
      showCars: !this.state.showCars
    } )
  }

  onChangeName = (name, index) => {
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

  // componentWillMount() {
  //   console.log('App componentWillMount')
  // }
  //
  // componentDidMount() {
  //   console.log('App componentDidMount')
  // }

  render() {
    // console.log('App render')

    const st = {
      textAlign: 'center',
      color: 'darkgray'
    }

    let cars = null
    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div className={classes.App} style={st}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <Counter/>

        <hr/>

        <button
          className={classes.AppButton}
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

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onDelete: PropTypes.func,
  onChangeName: PropTypes.func,
}

export default App
