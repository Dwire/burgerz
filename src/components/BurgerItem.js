import React, { Component } from 'react';

const BurgerItem = ({burger}) => {
  return (
    <div>
      <div className="BurgerItem">
        <h4>{burger.name}</h4>
      </div>
      <div className="BurgerBottomBun">
        <button onClick={console.log}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
