import React from 'react';
import Game from '../Game'
// import * as ROUTES from '../../constants/routes'
// import {Link} from 'react-router-dom'


class Home extends React.Component {
  state = {
    clicked: false,
    error: "Please click to start."
  }
  handleClick = () => {
    this.setState({clicked: true})

  }
  render() {
   return (
     <>
      {this.state.clicked ? <Game /> : <button className = 'start-game' onClick = {this.handleClick}>Start</button>}
    </>
   )
  }
}

  export default Home;
