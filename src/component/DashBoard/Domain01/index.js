import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./index.scss"

import Checkbox  from './box';
import Menu2 from '../../Menu2';
import UserInfo from '../../../component/userInfo';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const checkboxes1 = [
    {
        name: 'Field 1',
        key: 'field1',
    label: 'Field 1',
    },

    {
        name: 'Field 2',
        key: 'field2',
    label: 'Field 2',
    },

    {
        name: 'Field 3',
        key: 'field3',
    label: 'Field 3',
    },

    {
        name: 'Field 4',
        key: 'field4',
    label: 'Field 4',
    },
    
]

const checkboxes2 = [
    {
        name: 'Field 1',
        key: 'field1',
    label: 'Field 1',
    },

    {
        name: 'Field 2',
        key: 'field2',
    label: 'Field 2',
    },

    {
        name: 'Field 3',
        key: 'field3',
    label: 'Field 3',
    },

    {
        name: 'Field 4',
        key: 'field4',
    label: 'Field 4',
    },
    
]

class Domain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionFilterList: false,
            checkedItems: new Map(),
          }
      
          this.handleChange = this.handleChange.bind(this);
        }
          showList = () => this.setState(prevState => ({
            showActionFilterList: !prevState.showActionFilterList
        }));  
    
    
      handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }
    
      render() {
        return (
            <div id="domain">
                <div class="row text-center ">
  <div class="col-3">
    <Menu2/>
  </div>
  <div class="col-8 ">
    <div class="row text-center">
    <UserInfo/>
    <div class="col text-center">
    <h2>Upload data</h2>
    </div>
    
    </div>
    <div class="col main-test">

    
    <div class="row">
    
      
     
      <div class="privacy-info text-justify col-6">
      <div class="input-field mt-5">

<div className="group_text_filed">
                                <h2 className="text_choose">Please choose which data fields you have: </h2>
                                <div class="form-check-inline">
                    <React.Fragment>
            {

              checkboxes1.map(item => (
                <div class="box">
                <label key={item.key}>
                  {item.name}
                  <Checkbox class="box" name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>
                </div>
              ))
            }
          </React.Fragment>
          </div>
          
                    </div>

                    <div className="group_text_filed  mt-4">
                                <h2 className="text_choose">Please choose which data fields you want to predict: </h2>
<div class="form-check-inline ">
                    <React.Fragment>
            {

              checkboxes2.map(item => (
                  <div class="box">
                <label key={item.key}>
                  {item.name}
                  <Checkbox class="box" name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>
                </div>
              ))
            }
          </React.Fragment>
          </div>

          <div className="group_text_filed">
                                <h2 className="text_choose mt-4">Please choose time range you want to predict: </h2>
                                <div className="choose_time">
                                    <li class="mt-2">
                                    <label key="timeRange"> <Checkbox class="box" name="1000"   />1000
                  
                </label>
                                    </li>
                                    <li class="mt-2">
                                    <label key="timeRange"> <Checkbox class="box" name="1500"   />1500
                  
                </label>
                                    </li>
                                    <li class="mt-2">
                                    <label key="timeRange"> <Checkbox class="box" name="2000"   />2000
                  
                </label>
                                    </li>
                                </div>
                            </div>
                            
         
                            
                            
                            
                    </div>

                    </div>
      </div>
      <div class="col-5 text-justify">
      <h3>Privacy Policy</h3>
      <p>We collects a variety of information and data that you provided directly to us. We process your data to provide you with the Predicting Service that you
                  have requested when accepting our Terms of Services. We may have a legitimate interest to process your data for testing, maintainance and for analytics, research, and reporting
                  purposes. Without your information and data, we cannot provide you with the Services you have requested or you may be limited in your use of the Services. By clicking "Upload data"
                  you agree to and accept our privacy policy. </p>
          
      </div>
    </div>
    <div class="row ">
    <div class="col text-center">
    
                            <div class="row text-center">
                                <div class="col"><input type="file" name="myfile" /></div>
                            
                            </div>
                                
                                {/* <button class="btn btn-result">See result</button> */}
                            </div>
    </div>

    
                            <div class="row">
                                <div class="col">
                                <Link to='/recommend'><button class="btn train-btn">Recommended Models</button></Link>
                                </div>
                                
                            </div>
   
    </div>
  </div>
</div>

                
                    
                    


                </div>

          
                
          
          
        
        
        
            
    
        )}}

export default Domain;