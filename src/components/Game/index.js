import React from 'react'
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
      gameMessage: "",
      playerMessage: "",
      player1: {
        playerName: "Player1",
        score: 0,
        highScore: 0,
        streak: false
      },
      botPlayer:  {
        playerName: "CPU",
        score: 0,
        streak: 0,
        choice: ""
      }
    }
  }

  // Game rules
  gameRules = (choice) => {
    let choices = ['rock','paper','scissors']
    let cpuPlayer = choices[Math.floor(Math.random() * 3)]
    let botPlayer = this.state.botPlayer
    let player1 = this.state.player1
    botPlayer.choice = cpuPlayer
    this.setState({botPlayer: botPlayer})
    
    console.log('hello', botPlayer)
    if(choice === cpuPlayer) {
      this.setState({
        botPlayer, player1,
        gameMessage: "The game is tied!"
      })
    }
    if(choice === 'rock' && cpuPlayer === 'paper') {
      botPlayer.score += 1
      this.setState({
        botPlayer,
        gameMessage: "Computer just woop that ass!"
      })
    }
    if(choice === 'rock' && cpuPlayer === 'scissors') {
      player1.score += 1
      this.setState({
        player1,
        gameMessage: "Player 1 just smashed!"
      })
    }
    if(choice === 'paper' && cpuPlayer === 'rock') {
      player1.score += 1
      this.setState({player1,
        gameMessage: "Player 1 just smashed"})
      }
      if(choice === 'paper' && cpuPlayer === 'scissors') {
        botPlayer.score += 1
        this.setState({botPlayer,
          gameMessage: "Computer just whooped that candy ass"})
        }
        if(choice === 'scissors' && cpuPlayer === 'rock') {
          botPlayer.score += 1
          this.setState({botPlayer,
            gameMessage: "Computer just whooped that candy ass"})
          }
          if(choice === 'scissors' && cpuPlayer === 'paper') {
            player1.score += 1
            this.setState({player1,
              gameMessage: "Player 1 crushed the computer"})
            }
            console.log('check this', player1)
            this.setState({playerMessage: "The Computer picked "})
          }
          
          
          render() {
            const {gameMessage} = this.state;
            const {playerMessage} = this.state;
            
            return (
              <div className= "buttons">
          <div className= 'score-board'>
            {/* <h1 className= 'player-name'>{this.state.player1}</h1> */}
            <h2 className= 'play-score'>{this.state.player1.score}</h2>
            <h2 className= 'cpu-score'>{this.state.botPlayer.score}</h2>
          </div>
          <div className= 'results'>
          <h2>{playerMessage} {this.state.botPlayer.choice}</h2>
            <p>{gameMessage}</p>
          </div>
          <div className = 'btn-style'>
            <button className= "for-style1" onClick={() => this.gameRules('rock')}><FontAwesomeIcon className= 'fist' icon={faHandRock} size= '3x'/></button>
            <button className= "for-style2" onClick={() =>this.gameRules('paper')} ><FontAwesomeIcon className= 'knife-hand' icon={faHandPaper} size= '3x' /></button>
            <button className= "for-style3" onClick={() =>this.gameRules('scissors')} ><FontAwesomeIcon className= 'scissor-hand' icon={faHandScissors} size= '3x' /></button>
          </div>
          </div>
        )
      }
    }
    // export const gameStart = Game
    export default Game 