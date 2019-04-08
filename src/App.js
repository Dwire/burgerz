import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

import burgerAdapter from './adapter/burgerAdapter'

class App extends Component {

  state = {
    burgers: [],
    burgerId: null
  }

  componentDidMount() {
    burgerAdapter.getBurgers()
    .then(this.setOriginalBurgerState)
  }

  setOriginalBurgerState = (burgers) => {
    this.setState({burgers})
  }

  updateBurgerApi = (e, burgerId) => {
    const category = e.target.value

    burgerAdapter.patchBurger(burgerId, category)
    .then(this.updateBurgerState)
  }

  updateBurgerState = (burgerObj) => {
    const burgers = this.state.burgers.map(burger => {
      if (burgerObj.id === burger.id ) {
        return {...burger, category: burgerObj.category}
      } else {
        return burger
      }
    })

      this.setState({ burgers })

  }

  handleShowBurger = (burgerId) => {
    this.setState({burgerId})
  }

  displayBurger = () => {
    return this.state.burgers.find(burger => burger.id === this.state.burgerId)
  }

  hideBurger = (id) => {
    const hiddenBurg = this.state.burgers.filter(burger => burger.id !== id)
    this.setState({burgers: hiddenBurg})
  }


  render() {
    // console.log('STATE', this.state);
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} handleShowBurger={this.handleShowBurger} hideBurger={this.hideBurger} />
        <BurgerDisplay burger={this.displayBurger()} updateBurgerApi={this.updateBurgerApi} />
      </div>
    );
  }
}

export default App;
