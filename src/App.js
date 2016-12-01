import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  constructor (props) {
      super(props)
      this.state = {
        message: "Welcome to Tic-Tac-Toe Game",
        PLAYER_ONE_SYMBOL: "X",
        PLAYER_TWO_SYMBOL: "O",
        currentTurn: "X",
        board: [
          "", "", "", "", "", "", "", "", ""
        ],
        winner: null,

        player_one_name: "Player 1",
        player_two_name: "Player 2"
      }
    }
 
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={()=> this.setState({message: this.state.message + '!'})}>{this.state.message}</h2>
          
        <div className="app-container">

            <p className="App-power"> Powered by <code>ReactJS</code> </p> 

            <div className="turn"> 
                
                {!(this.state.winner) ? 
                      (this.state.currentTurn === "X" ? 
                      <span className="label label-success">{this.state.player_one_name}'s turn now </span> 
                    : <span className="label label-warning">{this.state.player_two_name}'s turn now </span>) 
                    : <span>{this.state.winner ? <span className="label label-success">{` The winner is ${this.state.currentTurn === "X" ? this.state.player_two_name : this.state.player_one_name } matching indexes: ${this.state.winner}`}</span> : null} </span> 
                }
                
            </div>
            <div className="container board" id="mainBoard">
              {this.state.board.map((cell, index) => {
               return <div onClick={() => this.handleClick(index)} id={index} className="square col-md-4 col-xs-4 col-sm-4">{cell}
                      </div>
              })}

              <span className="gameReset"> {this.state.winner ? <span className="label label-danger"> Game Over!</span> : <span className="label label-primary" onClick={() => this.gameRestart()}>   Reset </span>} </span>    
              <span className="gameRestart" onClick={() => this.gameRestart()}> {this.state.winner ? <span className="label label-primary">   Restart </span> : null} </span>    
              {this.state.winner ? this.doGameover() : false}
            </div>
      
          </div>
        </div>   
      </div>
    );
  }

  handleClick(index) {
    if(this.state.winner){
      console.log(this.state.board)
    }
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner()
         })
    }
    
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn; 
        
      } else {
        return false
      }
    })
  }

 gameRestart(){
   console.log("O");
   this.setState({
        currentTurn: "X",
        board: [
          "", "", "", "", "", "", "", "", ""
        ],
        winner: null,

        player_one_name: "Player 1",
        player_two_name: "Player 2"
   });

   for(var i in this.state.board){
     var elem= window.document.getElementById(i);
     elem.className = "square col-md-4 col-xs-4 col-sm-4";
   }
   
   var mainElem =  window.document.getElementById("mainBoard");
   mainElem.className += " animated bounceInDown";
   setInterval(function(){ mainElem.className = " container board";}, 2000);
   
 }

doGameover(){
  console.log(this.state.board);
  console.log(this.state.winner);
  (this.state.winner).forEach(doThis);
  function doThis(){

  };
  for(var i in this.state.winner){
    console.log(this.state.winner[i]);
    var elem= window.document.getElementById(this.state.winner[i]);
    console.log(elem);
    elem.className += " fadeEffect animated tada";
    //elem.className += " fadeEffect animated infinite pulse";
  }
}


}

export default App;



