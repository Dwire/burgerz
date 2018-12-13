import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    burgerList: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(this.setInitialBurgerList)
  }

  setInitialBurgerList = (burgerList) => {
    this.setState({
      burgerList
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="BurgerContainer">
        <BurgerFilter />
        <BurgerList burgerList={this.state.burgerList}/>
      </div>
    )
  }
}
