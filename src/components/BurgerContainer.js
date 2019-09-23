import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter
          filterBurgers={this.props.filterBurgers}
        />
        <BurgerList
          displayBurger={this.props.displayBurger} 
          deleteBurger={this.props.deleteBurger}
          burgers={this.props.burgers} />
      </div>
    )
  }
}
