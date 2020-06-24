import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';

class DashBoard extends Component {
  render() {
    return (

      <div id="dashboard">
        <Menu />
      </div>
    );
  }
}

export default DashBoard;