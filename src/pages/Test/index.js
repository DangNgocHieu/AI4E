import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/Domain01';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import { Link } from 'react-router-dom';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Test extends Component {
  render() {
    return (

      <div id="test">
        {/* <Upload /> */}
<div class="row main text-center ">
  <div class="col-3">
    <Menu2/>
  </div>
  <div class="col-8 ">
    <div class="row text-center">
    <UserInfo/>
    <div class="col text-center">
    <h2>Test Model</h2>
    </div>
    
    </div>
    <div class="col main-test">

    
    <div class="row">
    
      
     
      <div class="privacy-info text-justify col-5">
      <h3>Privacy Policy</h3>
      <p>We collects a variety of information and data that you provided directly to us. We process your data to provide you with the Predicting Service that you
                  have requested when accepting our Terms of Services. We may have a legitimate interest to process your data for testing, maintainance and for analytics, research, and reporting
                  purposes. Without your information and data, we cannot provide you with the Services you have requested or you may be limited in your use of the Services. By clicking "Upload data"
                  you agree to and accept our privacy policy. </p>
      </div>
      <div class="col-5 text-justify">
        <h3>Data Requirement</h3>
        <p>We support 2 types of data file: CSV, Excel. 
          Your data file must include at least these field:</p>
          <ul class="list-group">
  <li class="list-group-item">Field name</li>
  <li class="list-group-item">Field name</li>
  <li class="list-group-item">Field name</li>
  <li class="list-group-item">Field name</li>
  <li class="list-group-item">Field name</li>
</ul>
      </div>
    </div>
    <div class="row ">
    <div class="col text-center">
                                
                                <input type="file" name="myfile" />
                                {/* <button class="btn btn-result">See result</button> */}
                            </div>
    </div>
    <div class="row">
      <div class="col text-center">
      <Link to="/result"><button class="btn btn-result mt-3">See result</button></Link>
      </div>
    </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Test;