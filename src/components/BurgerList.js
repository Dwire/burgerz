import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({burgers, handleDelete, handleShow}) => {
  return (
    <div className="BurgerList">
      { burgers.map(burger => {
        return <BurgerItem key={burger.id} burger={burger} handleDelete={handleDelete} handleShow={handleShow}/>
      }) }
    </div>
  )
}

export default BurgerList
