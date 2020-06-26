import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu2 from '../../component/Menu2';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModelSetting2 from '../../component/DashBoard/ModelSetting2';
import { LabelList } from 'recharts';

class DashBoard extends Component {
  render() {
    return (

      <div id="dashboard">
        <div class ="row">
          <div class="col-3">
          <Menu2 />
          </div>
        
        <div class="col-8">
        <ModelSetting2 />
        </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;