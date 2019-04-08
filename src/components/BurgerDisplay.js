import React, { Component } from 'react';
import ControlledForm from './ControlledForm';

const BurgerDisplay = (props) => {
  console.log('D Props', props);
  return (
    <div className="BurgerDisplay">
      <img src={ props.burger.imgURL }/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
      <select value={props.burger.category} onChange={(e) => props.updateBurgerApi(e, props.burger.id)}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
      <ControlledForm />
    </div>
  )
}

BurgerDisplay.defaultProps = {
  burger: {
    imgURL: ''
  }
}

export default BurgerDisplay
