import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/Domain01';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Domain extends Component {
    render()
    {
        return(
            <div id="domain">
                <div className="row">
                    <div className="col-3">
                        <Menu2 />

                    </div>
                    <div className="col-8 text-center">
                        <UserInfo />
                        <h2 className="text-left">Domain Name</h2>
                        <div className="newmodel text-left">
                           <Link to='/upload'><button className="btn new">Train your new model</button></Link>
                        </div>
                        <h2>Our significant works</h2>
                        <div className="general-domain">
                            <div className="row">
                                <div className="col-5 model">
                                    <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                
                                </div>
                                <div className="col-5 model">
                                <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-5">
                                    <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>

      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                
                                </div>
                                <div className="col-5">
                                <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test ">Test</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Domain;