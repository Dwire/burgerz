import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({burgerList}) => {
  return (
    <div className="BurgerList">
      { burgerList.map(burger => {
        return <BurgerItem key={burger.id} burger={burger}/>
      }) }
    </div>
  )
}

export default BurgerList
