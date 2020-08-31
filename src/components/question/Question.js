import React, { Component } from 'react';
import { findAllByTestId } from '@testing-library/react';

class Question extends Component {

  constructor() {
    super(); 
    this.state = { showMessage: false }
    
  }
  
  

  showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  render() {
    return (
      <div>
        <strong>Click the buttons to toggle the Answer: </strong><br/>
        <button onClick={this.showMessage.bind(null, true)}>show</button>
        <button onClick={this.showMessage.bind(null, false)}>hide</button>
        { this.state.showMessage && (<div>answer here.</div>) }
      </div>
    )
  }
}

export default Question;
