import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu2 from '../../component/Menu2';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import User from '../User';
import Chart from '../../img/chart1.png';

class Progress extends Component {
    render() {
        console.log(this.props)
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
                                <h2>Training Progress</h2>
                                <div class="show-progress">
                                    <div className="row show-progress">

                                        <div class="col-5">
                                            <button type="button" class="btn progress-btn"><h2>Time remaining</h2>0</button>
                                        </div>
                                        <div class="col-5">
                                            <button type="button" class="btn progress-btn"><h2>Accuracy</h2></button>
                                        </div>


                                    </div>


                                    <div class="row mt-5 text-right">
                                        <div class="col-5">
                                            <button class="btn">Stop Training</button>

                                        </div>
                                        <div class="col-5 text-left">
                                            {/* <button class="btn"><Link to={{ pathname: "/result", query: { result: this.props.history.location.state.result } }} >View Prediction</Link></button> */}
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