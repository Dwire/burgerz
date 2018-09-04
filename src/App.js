import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgersList: [],
    burgerId: null
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      burgersList: resData,
    })
  }

  handleDelete = (burg) => {
    const burgId = burg.id
    const newList = this.state.burgersList.filter(burg => {
      return burg.id !== burgId
    })
    this.setState({burgersList: newList})
  }

  handleShow = (burg) => {
    this.setState({burgerId: burg.id})
  }

  displayWhat = () => {
    if (this.state.burgerId){
      return this.state.burgersList.find(burger => burger.id === this.state.burgerId)
    }else{
      return {
        imgURL: "https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg"
      }
    }
  }

  setCategory = (e) => {
    const burgId = this.state.burgerId
    const newBurgerList = this.state.burgersList.map(burger => {
      if (burger.id === burgId) {
        return {...burger, category: e.target.value}
      }else{
        return burger
      }
    })

    this.setState({burgersList: newBurgerList}, this.updateBurgers)
  }

  updateBurgers = () => {
    const bID = this.state.burgerId
    const currentBurg = this.state.burgersList.find(burger => {
      return burger.id === bID
    })

    fetch(`http://localhost:3001/burgers/${bID}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(currentBurg)
    })
    .then(res => res.json())
    .then(console.log)
  }


  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgersList} handleDelete={this.handleDelete} handleShow={this.handleShow}/>
        <BurgerDisplay currentBurger={this.displayWhat()} setCategory={this.setCategory}/>
      </div>
    );
  }
}

export default App;
