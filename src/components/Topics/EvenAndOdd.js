import React, { Component } from 'react';

class EvenAndOdd extends Component {
    
    constructor(){
        super()

        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
        }
    }

    change(ba){
        this.setState({ userInput: ba})
    }

assignEvenAndOdds(userInput) {
let even = []
let odd = []
let arr = userInput
    for( let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i] )
        } else {
            odd.push(arr[i] )
        }
    }
    let  evens = even.join(',')
    let  odds = odd.join(',')
    


    this.setState({evenArray: evens, oddArray: odds})
}


    render() {
        
      return (
         <div className="puzzleBox evenAndOddPB">
             <h4>Evens and Odds</h4>
             <input className = "inputLine" onChange={ (e) => this.change(e.target.value)}  />
             <button className = 'confirmationButton' onClick = { () => { this.assignEvenAndOdds(this.state.userInput) }}>Bang</button>
             <span className='resultsBox'> Evens: {this.state.evenArray} </span>
             <span className='resultsBox'> Odds: {this.state.oddArray}</span>
             
         </div>
      )
    
    }
  }

export default EvenAndOdd