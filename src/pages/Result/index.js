import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/TrainAttr';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import User from '../User';
import Chart from '../../img/chart1.png';

class Progress extends Component {
    render() {
        return (
            <div id="progress">
                <div className="row">
                    <div className="col-3">
                        <Menu2 />
                    </div>
                    <div className="col-8">

                        <div class="row text-center">
                            <UserInfo />
                            <div class="col text-center">
                                <h2>Predicting Result</h2>
                                <div class="show-progress">
                                    <div className="row show-progress">

                                        <div className="col-12">
                                            <h3>This is the result page.</h3>
                                        </div>


                                    </div>
                                    <div class="row illus text-center">
                                        <p class="charshow">
                                            <img src={Chart} />
                                        </p>

                                    </div>

                                    <div class="row mt-5">
                                        <div class="col-12 text-center">
                                            <button class="btn">Save Model</button>

                                        </div>

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

export default Progress;