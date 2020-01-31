import React from 'react';
// import Game from '../Game'
// import * as ROUTES from '../../constants/routes'
import {Link} from 'react-router-dom'
// import posed from 'react-pose'
// import {physics} from 'popmotion';

// const Parent = posed.h1()          // for react animations
// const Frame = posed.div()          // for react animations

// physics({ 
//   from: 0,                         // testing some animation code
//   velocity: 1000,
//   friction: 0.8,
//   to: 400,
//   springStrenght: 500
// })
//   .start(v => console.log(v))      // end of test code

class Home extends React.Component {
  state = {
    clicked: false,
    gameMenu: 'RPS'
  }

 render() {
   return (
     <div className = 'game-menu'>
      <h1 className = 'game-head'>{this.state.gameMenu}</h1>
     <Link to = '/game'>
      <button className = 'start-game'>Click to Start</button>
     </Link>
    </div>
   )
  }
}

export default Home;
