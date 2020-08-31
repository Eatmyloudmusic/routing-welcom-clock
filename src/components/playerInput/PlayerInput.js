import React, { Component } from 'react';

class PlayerInput extends Component {


  constructor(props){
    super(props);
    this.state = { userAnswer: '' };
  }
 
  handleChange = event => {
    this.setState({ userAnswer: event.target.value });
  };
 
  render() {
    return (
      <React.Fragment>
        <form>
          <br/>
          <input
            type="text"
            name=""
            value={this.state.userAnswer}
            onChange={this.handleChange}
          />
        </form>
 
        <h3>Your Answer is: {this.state.userAnswer}</h3>
      </React.Fragment>
    );
  }
 }
export default PlayerInput;