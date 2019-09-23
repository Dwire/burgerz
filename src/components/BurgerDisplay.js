import React, { Component } from 'react';

const BurgerDisplay = (props) => {

  const handleChange = (event) => {
    const updatedBurger = { ...props.burger, category: event.target.value }
    props.updateBurger(updatedBurger)} 

  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
      <select
        value={props.burger.category}
        onChange={handleChange}
      >
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
