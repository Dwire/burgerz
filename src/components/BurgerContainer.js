import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  state = {
    filterTerm: 'All'
  }

  handleFilter = (e) => {
    this.setState({filterTerm: e.target.value}, this.filterBurgers)
  }

  filterBurgers = () => {
    if (this.state.filterTerm === 'Relatable') {
      return this.props.burgers.filter(burger => {
        return burger.category === 'Relatable'
      })
    }else if (this.state.filterTerm === 'Bougie' ) {
      return this.props.burgers.filter(burger => {
        return burger.category === 'Bougie'
      })
    }else{
      return this.props.burgers
    }
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilter={this.handleFilter} />
        <BurgerList burgers={this.filterBurgers()} handleDelete={this.props.handleDelete} handleShow={this.props.handleShow}/>
      </div>
    )
  }
}
