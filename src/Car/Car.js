import React from 'react'
import './Car.scss'
// import Radium from 'radium'

class Car extends React.Component {

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('Car componentWillReceiveProps', nextProps, nextContext)
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext)
  //   return nextProps.name.trim() !== this.props.name.trim()
  // }

  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState)
  //   return prevState
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('Car componentDidUpdate', prevProps, prevState, snapshot)
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('Car getSnapshotBeforeUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('Car componentWillUnmount')
  // }

  render() {
    // console.log('Car render')

    if(Math.random() > 0.95) {
      throw new Error('Car render failed')
    }

    const inputClasses = ['input']

    if(this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if(this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <div className={'Car'}>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car