import React from 'react'
import './Car.scss'
// import Radium from 'radium'

class Car extends React.Component {

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('Car componentWillReceiveProps', nextProps, nextContext)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext)

    return nextProps.name.trim() !== this.props.name.trim()
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Car componentDidUpdate', prevProps, prevState, snapshot)
  }

  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }

  render() {
    console.log('Car render')

    const inputClasses = ['input']

    if(this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if(this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      }
    }


    return (
      <div className={'Car'} style={style}>
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