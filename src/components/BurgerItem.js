import React, { Component } from 'react';

const BurgerItem = (props) => {
  const handleClick = () => {
    props.displayBurger(props.burger)
  }

  const handleDelete = () => {
    props.deleteBurger(props.burger)
  }

  return (
    <div>
      <div className="BurgerItem">
        { props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button 
          onClick={handleClick}>Show
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
