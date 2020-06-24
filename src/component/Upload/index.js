import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox  from './box';
import Menu2 from '../Menu2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Upload/index.scss';
// import './style.css';

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

class Upload extends Component {
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
            <div id="upload">
                <div class="row ">
                    <div class="col-3 no-margin">
                    <Menu2/>
                    </div>
                    <div class="col-8 bg-grey no-margin">
                        <div class="wrraper_domain">
                    <div className="dashboardRight ">
                    <div className="dashboardInfo">
                            <div className="back">
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <Link className="link" to="/Dashboard">Back</Link>
                        </div>
                        <div className="info">
                            <p className="text-name">Nguyen Phi Le</p>
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </div>
                    </div>
</div>
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
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>1000</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>1500</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>2000</label>
                                    </li>
                                </div>
                            </div>
                            
         
                            
                            <div class="upload-btn-wrapper">
                                <button class="btn">Data Upload</button>
                                <input type="file" name="myfile" />
                            </div>
                            <div className="pre_next">

                                
                                <button className="btn_next">
                                    <span className="text_next">See Result</span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>

                            </div>
                    </div>

                    </div>
                </div>
                </div>

          
                </div>
          
          
        
        
            </div>
            
    
        )}}
    export default Upload;