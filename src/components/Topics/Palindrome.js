import React, { Component } from 'react';


class Palindrome extends Component {
constructor(){
  super()
  this.state = {
    userInput: '',
    palindrome: ''
  }
}


change(ba){
  this.setState({ userInput: ba})
}

isPalin(userInput){
  let thing = userInput
  let noThing = userInput
  noThing = noThing.split('');
  noThing = noThing.reverse();
  noThing = noThing.join('');

  if( thing === noThing){
  this.setState({palindrome: 'true'})
  } else
{  this.setState({palindrome: 'false'})
}}



  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={(e) => this.change(e.target.value)} required></input>
        <button className="confirmationButton" onClick = {()=> this.isPalin(this.state.userInput)}> Check </button>
        <span className="resultsBox"> Palindrome:{this.state.palindrome}</span>
      </div>
    )
  }


}


export default Palindrome