import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  state = {
    term: 'All'
  }

  handleTermSelect = (e) => {
    const term = e.target.value
    this.setState({term})
  }

  filteredBurgers = () => {
    const burgers = this.props.burgers

    if (this.state.term !== 'All') {
      return burgers.filter(burger => burger.category === this.state.term)
    } else {
      return burgers
    }

  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleTermSelect={this.handleTermSelect} />
        <BurgerList burgers={this.filteredBurgers()} handleShowBurger={this.props.handleShowBurger} hideBurger={this.props.hideBurger}/>
      </div>
    )
  }
}
