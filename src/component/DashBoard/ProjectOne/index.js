import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./index.scss"
import LineChart from '../LineChart';
class ProjectOne extends Component {
    render() {
        return (
            <div className="wrraper_contaier">
                <div className="dashboardRight">
                    <div className="dashboardInfo">
                        <p className="text-name">Nguyen Phi Le</p>
                        <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </div>
                    <div className="dashboardProject">
                        <p className="text_project">Project 01</p>
                        <div id="project">
                            <p className="text_domain">Domain 01</p>
                            <div className="chart">
                                <img src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/104981586_255208352437550_5389192417200094710_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=KQQoIYLNzLQAX_PF1Cc&_nc_ht=scontent.fhan5-4.fna&oh=f0099b5f3a6b1cb77cdc63eb6f978437&oe=5F1A2907"></img>
                                <img src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.15752-9/104810429_1203919179984984_3403971174452972525_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=mI3QRLtTACAAX8zLHGC&_nc_ht=scontent.fhan5-7.fna&oh=a6f3a0a9bda94e6533dec7abd9d9912c&oe=5F18BD24"></img>
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.15752-9/104437738_2704473473167719_3971967571801694842_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=30GIgoZXEU4AX8C5iAH&_nc_ht=scontent-sin6-2.xx&oh=ddcb4851687ac54921702ea42e8e1d8f&oe=5F17A729"></img>
                            </div>
                            <div className="footer">
                                <div className="text_data">
                                    <p className="text_on">Data field you have: </p>
                                    <p className="text_below">
                                        <a>Filed 01, </a>
                                        <a> Filed 02, </a>
                                        <a> Filed 03</a>
                                    </p>
                                </div>
                                <div className="text_data">
                                    <p className="text_on">Data field you want to predict:  </p>
                                    <p class="text_below" >
                                        <a>Filed 01,</a>
                                        <a> Filed 02,</a>
                                        <a> Filed 04</a>
                                    </p>
                                </div>
                                <div className="text_data">
                                    <p className="text_on">Time range you want to predict: </p>
                                    <p className="text_below">1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default ProjectOne