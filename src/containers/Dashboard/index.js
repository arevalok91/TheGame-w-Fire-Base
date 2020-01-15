import React from "react";
// import labsLogo from '../../assets/images/ctd-labs-logo.png'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    
  }


  render() {

    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
          <p>FireBase</p>
          
        
        </div>
      </div>
    );
  }
}


export default Dashboard