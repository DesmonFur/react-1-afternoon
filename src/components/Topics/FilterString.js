import React, { Component } from 'react';


class FilterString extends Component {

  constructor(){
    super()

  this.state =  {
  notDogs: ['Dangle','Derrier','Donton', 'Broud,', 'Botta', 'Byt', 'Cowol'],
    userInput: '',
    filteredNotDogs: []
  }
  } 

  change(ba){
    this.setState({ userInput: ba})
  }

  
  filteredNotDogs(userInput) {
    let notDogs = this.state.notDogs;
    let filteredNotDogs = [];

    for ( let i = 0; i < notDogs.length; i++ ) {
      if ( notDogs[i].includes(userInput) ) {
        filteredNotDogs.push(notDogs[i]);
      }
    }

    this.setState({ filteredNotDogs: filteredNotDogs });
  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> notDogs: {JSON.stringify(this.state.notDogs, null , 10)}</span>
        <input className="inputLine" onChange={(e) => this.change(e.target.value)}  />
        <button className="confirmationButton" onClick = { () => this.filteredNotDogs(this.state.userInput)} > Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredNotDogs,null, 10)}</span>
      </div>
    )
    }
  }

export default FilterString