import React, { Component } from 'react';


class FilterObject extends Component {
constructor(){
  super()
  this.state = {
    employees: [
      {
        name: 'Jimmy Joe',
        title: 'Hack0r',
        age: 12,
      },
      {
        name: 'Jeremy Schrader',
        age: 24,
        hairColor: 'brown'
      },
      {
        name: 'Carly Armstrong',
        title: 'CEO',
      }
    ],

    userInput: '',
    filteredEmployees: []
  }
}

change(ba){
  this.setState({ userInput: ba})
}

filterEmployees(userput){
let employees = this.state.employees
let filteredEmployees = []
for ( let i = 0; i < employees.length; i++ ) {
  if ( employees[i].hasOwnProperty(userput) ) {
    filteredEmployees.push(employees[i]);
  }

// for (let i = 0; i < employees.length; i++){
// let filtered = employees.filter(employees[i].hasOwnProperty(userput))
// filterEmployees.push(filtered[i])
} 
  this.setState({filteredEmployees: filteredEmployees})
}


render() {
  return (
    <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => this.change(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
      <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
    </div>
  )
}
  }

export default FilterObject