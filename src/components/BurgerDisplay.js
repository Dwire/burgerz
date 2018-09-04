import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.currentBurger.imgURL}/>
      <br/>
      <h1>{props.currentBurger.name}</h1>
      <br/>
      <select value={props.currentBurger.category} onChange={props.setCategory}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
