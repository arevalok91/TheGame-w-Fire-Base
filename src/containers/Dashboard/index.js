import React from "react";
import rps from '../../assets/images/rps.jpg'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import NavigationNonAuth from '../../components/Navigation'
// import labsLogo from '../../assets/images/ctd-labs-logo.png'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  render() {

    return (
      <div className="view-container-dashboard">
        <img src={rps} alt='RPS main backgroud' />
        <Link to = {ROUTES.SIGN_IN}>
          <button className = 'signin-btn' onClick ={NavigationNonAuth}>Sign In</button>
        </Link>
        <div className="dashboard-content">
          {/* <img src={rps} alt='RPS main backgroud' /> */}
        </div>
      </div>
    );
  }
}


export default Dashboard

// import React from 'react'
// import rps from '../../assets/images/rps.jpg'

// const Landing = () => {
//   return <img src={rps} alt='RPS main backgroud' />
// }
// export default Landing