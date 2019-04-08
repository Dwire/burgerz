import React, { Component } from 'react'

class ControlledForm extends Component {
  state = {
    category: '',
    name: ''
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
        // console.log(this.state);

  //   burgerAdapter.postBurger(this.state)
  // }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='name' onChange={this.handleChange} value={this.state.name} />
        <input type="text"  name='category' onChange={this.handleChange} value={this.state.email}/>
        <input type="submit" value='Create New Burger'/>
      </form>
    )
  }
}


export default ControlledForm
