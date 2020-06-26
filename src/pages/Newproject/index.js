import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu2 from '../../component/Menu2';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModelSetting2 from '../../component/DashBoard/ModelSetting2';
import { LabelList } from 'recharts';
import Create from '../../component/DashBoard/Create';

class Newproject extends Component {
  render() {
    return (

      <div id="newproject">
        <div class ="row">
          <div class="col-3">
          <Menu2 />
          </div>
        
        <div class="col-8">
        <Create />
        </div>
        </div>
      </div>
    );
  }
}

export default Newproject;