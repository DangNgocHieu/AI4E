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
import { Line } from "react-chartjs-2";

const label_fake = ["1/1", "2/1", "3/1", "4/1", "5/1", "6/1", "7/1", "8/1", "9/1", "10/1"];
const train_fake = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
const test_fake = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pred: [],
            gtruth: [],
            label: []
        }
    }

    componentDidMount() {
        let result = this.props.history.location.query.result
        let gt = JSON.parse(result.groundtruth)
        let pred = JSON.parse(result.output)

        let label = [...Array(gt.length).keys()]
        this.setState({ pred: pred, gtruth: gt, label: label })
    }

    render() {
        console.log(this.props)
        return (
            <div id="progress">
                <div className="row text-center">
                    <div className="col-3">
                        <Menu2 />
                    </div>
                    <div className="col-8">

                        <div class="row">
                            <UserInfo />
                        </div>
                        <div class="row text-center">
                            <h2>Predicting Result</h2>
                        </div>
                        <div class="show-progress">
                            <div className="row show-progress">

                                <div class="row illus text-center">
                                    <div class="charshow">
                                        {/* <img src={Chart} /> */}
                                        <article className="canvas-container">
                                            <Line
                                                data={{
                                                    labels: this.state.label,
                                                    datasets: [
                                                        {
                                                            data: this.state.pred,
                                                            label: "Train",
                                                            borderColor: "#3e95cd",
                                                            fill: false
                                                        },
                                                        {
                                                            data: this.state.gtruth,
                                                            label: "Groundtruth",
                                                            borderColor: "#8e5ea2",
                                                            fill: false
                                                        },
                                                    ]
                                                }}
                                                options={{
                                                    title: {
                                                        display: true,
                                                        text: "Evaluate the model accuracy based on graph",
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: "bottom"
                                                    },
                                                    responsive: true, maintainAspectRatio: true,
                                                }} />
                                        </article>
                                    </div>

                                </div>
                                <div class="row save-btn mt-5">
                                    <div class="col text-center">
                                        <button class="btn">Save Model</button>
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