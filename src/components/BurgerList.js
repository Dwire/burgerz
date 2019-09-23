import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  console.log('BLIST', props);
  
  const renderSingleBurger = () => {
    return props.burgers.map(burger => {
      return (
        <BurgerItem
          deleteBurger={props.deleteBurger}
          displayBurger={props.displayBurger} 
          burger={burger} />
      )
    })
  }  

  return (
    <div className="BurgerList">
      { renderSingleBurger() }
    </div>
  )
}

export default BurgerList
