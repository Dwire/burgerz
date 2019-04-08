import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  console.log('BL PROPS', props);
  const burgerArray = props.burgers.map(burger => <BurgerItem key={burger.id} burger={burger} handleShowBurger={props.handleShowBurger} hideBurger={props.hideBurger}/>)
  return (
    <div className="BurgerList">
      {burgerArray}
    </div>
  )
}

export default BurgerList
