import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = {
    burgers: [],
    filteredBurgers: [],
    burger: {
      "id": 1,
      "name": "The Baconator",
      "category": "Relatable",
      "imgURL": "https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg"
    },
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(output => {
      this.setState({
        burgers: output,
        filteredBurgers: output
      })
    })
  }

  displayBurger = (burger) => {
    this.setState({
      burger: burger
    })
  }

  deleteBurger = burgerToRemove => {
    const updatedBurgerList = this.state.burgers.filter(burger => {
      return burger.id !== burgerToRemove.id
    })

    this.setState({
      burgers: updatedBurgerList,
      filteredBurgers: updatedBurgerList
    })

    fetch(`http://localhost:3001/burgers/${burgerToRemove.id}`, {
      method: 'DELETE'
    })
  }

  updateBurger = updatedBurger => {
    const updatedBurgerList = this.state.burgers.map( burger => {
      if (updatedBurger.id === burger.id) {
        return updatedBurger
      } else {
        return burger
      }
    })

    fetch(`http://localhost:3001/burgers/${updatedBurger.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBurger)
    })

    this.setState({ 
      burgers: updatedBurgerList,
      burger: updatedBurger 
    })


  }

  filterBurgers = category => {
    let filteredBurgers = []

    if (category === "All") {
      filteredBurgers = this.state.burgers
    } else {
      filteredBurgers = this.state.burgers.filter( burger => {
        return burger.category === category
      })
    }

    this.setState({filteredBurgers: filteredBurgers})
  }

  render() {
    console.log('APPP', this.state);
    
    return (
      <div id="App">
        <BurgerContainer
          filterBurgers={this.filterBurgers}
          displayBurger={this.displayBurger} 
          deleteBurger={this.deleteBurger}
          burgers={this.state.filteredBurgers} 
        />
        <BurgerDisplay
          updateBurger={this.updateBurger}
          burger={this.state.burger} />
      </div>
    );
  }
}

export default App;
