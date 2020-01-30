import React from 'react'
// import Home from '../Home'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core" 
import {
  faHandRock,
  faHandPaper,
  faHandScissors
} from "@fortawesome/free-solid-svg-icons"
library.add(faHandRock, faHandPaper, faHandScissors);

// Class component
class Game extends React.Component {   
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      gameMessage: "",
      playerMessage: "",
      player1: {
        playerName: "Player1",
        score: 0,
        highScore: 0,
        streak: 0,
        wins: 0,
        loses: 0,
        percentage: 0
      },
      botPlayer:  {
        playerName: "CPU",
        score: 0,
        streak: 0,
        choice: "",
      }
    }
  }
  // win, lose percentage record
   WinLosePercentage = () => {
    let wins = this.state.player1.wins
    let loses = this.state.player1.loses
    let percent = this.state.player1.percentage
    percent = wins / loses * 100
    console.log(percent)
    return percent
  }
////////////////////////////////////////////////////////
// trying to end the game
  EndGame = () => {
    // let player1 = this.state.player1
    let playerScore = this.state.player1.score
    let cpuScore = this.state.botPlayer.score

    if(playerScore === 10) {
      return(
        <p>Player 1 Wins</p>    //////// im still not sure if this is correct
      )
    }
    if(cpuScore === 10) {
      return(
        <p>Cpu Wins</p>
      )
    }
  }
 ////////////////////////////////////////////////////// 
  
  // Game rules
  gameRules = (choice) => {
    let choices = ['rock','paper','scissors']
    let cpuPlayer = choices[Math.floor(Math.random() * 3)]
    let botPlayer = this.state.botPlayer
    let cpuScore = this.state.botPlayer.score
    let player1 = this.state.player1
    let playerScore = this.state.player1.score
    let winner = ""
    let gameMessage = ""
    let streak = this.state.player1.streak
    let winLosePct = this.state.WinLosePercentage       // its undefined
    console.log('does it work?', streak)
    console.log('the updated player', player1)
    console.log('show me', cpuPlayer)
    console.log('percent', winLosePct)
    botPlayer.choice = cpuPlayer
    this.setState({botPlayer: botPlayer})
    // game algorithm
    if(choice === cpuPlayer) {
      streak = 0
      gameMessage =  'tie game';
      winner = 'NA'
    }
    if(choice === 'rock' && cpuPlayer === 'paper') {
      cpuScore += 1
      streak = 0
      gameMessage = ""
      winner = ""
    }
    if(choice === 'rock' && cpuPlayer === 'scissors') {
      playerScore += 1
      streak += 1
      gameMessage = ""
      winner = ""
    }
    if(choice === 'paper' && cpuPlayer === 'rock') {
      player1.score += 1
      streak += 1
      gameMessage = ""                                // need to upload list of messages
      winner = ""
    }
    if(choice === 'paper' && cpuPlayer === 'scissors') {
      cpuScore += 1
      streak = 0
      gameMessage = ""                                // need to upload list of messages
      winner = ""                                     // say something slick
    }
    if(choice === 'scissors' && cpuPlayer === 'rock') {
      cpuScore += 1
      streak = 0
      gameMessage = ""                              // need to upload list of messages
      winner = ""                                   // say something slick
    }
    if(choice === 'scissors' && cpuPlayer === 'paper') {
      player1.score += 1
      streak += 1
      gameMessage = ""                              // need to upload list of messages
      winner = ""                                   // say something slick

      
    }

      this.setState({
        botPlayer, player1,
        gameMessage: gameMessage, winner,
        playerScore: playerScore,
        cpuScore: cpuScore,
        streak: streak
      })
    }
    
    render() {
      const {gameMessage} = this.state;
      
      return (
        <>
          <Link to = '/home'>
           <button className = 'home-style'>Return to Menu</button>
          </Link>
        
        <div className= "buttons">
          <div className= 'score-board'>
            <h2 className= 'play-score'>Player 1: {this.state.playerScore}</h2>
            <h2 className= 'cpu-score'>CPU: {this.state.cpuScore}</h2>
            <h3 className= 'streak'>{this.state.streak}</h3>
          </div>
        <div className= 'results'>
          <h2>The computer picked {this.state.botPlayer.choice}</h2>
          <p>{gameMessage}</p>
        </div>
        <div className = 'btn-style'>
          <button className= "for-style1" onClick={() => this.gameRules('rock')}><FontAwesomeIcon className= 'fist' icon={faHandRock} size= '3x' /></button>
          <button className= "for-style2" onClick={() =>this.gameRules('paper')} ><FontAwesomeIcon className= 'knife-hand' icon={faHandPaper} size= '3x' /></button>
          <button className= "for-style3" onClick={() =>this.gameRules('scissors')} ><FontAwesomeIcon className= 'scissor-hand' icon={faHandScissors} size= '3x' /></button>
        </div>
        </div>
         </>
      )
    }
  }
  export default Game 

  
  