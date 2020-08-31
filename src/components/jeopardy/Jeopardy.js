import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

import Question from "../question/Question";
// import PlayerDisplay from "./components/playerDisplay/PlayerDisplay"
import PlayerInput from "../../PlayerInput"

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = { showMessage: false };
    this.state = {
      data: {},
      score: 0
      
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  
  render() {

    let category = "loading"

    if(this.state.data.category){
        category = this.state.data.category.title
    }
    return (
      <div>
        {/* {JSON.stringify(this.state.data)} */}
        <strong>Users Score: </strong>{this.state.score}<br />
        <strong>Question: </strong>{this.state.data.question}<br />
        <strong>Value: </strong>{this.state.data.value}<br />
        <strong>Category: </strong>{category}<br />
        {/* <strong>Answer: </strong>{this.state.data.answer}<br /> */}
        <br />
        <input type="text" 
        name="answer" 
        placeholder="Place Answer Here..."
        onChange={this.inputData}/>
        <br />
        <div id="lucky2"></div>
        <strong>Click the buttons to toggle the Answer: </strong><br/>
        <button id="lucky" onClick={this.showMessage.bind(null, true)}>Take A Guess</button>
        <br />
        <button id="lucky3" onClick={this.showMessage.bind(null, false)}>hide</button>
        { this.state.showMessage && (<div>{this.state.data.answer}</div>) }
        <div id="lucky2"></div>

      </div>
    );
  }
}
export default Jeopardy;
