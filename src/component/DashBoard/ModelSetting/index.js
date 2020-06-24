import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import { Link } from 'react-router-dom';
class ModelSetting extends Component {
    render() {
        return (
            <div id="menu">
                <div className="wrraper">
                    <img class="img_title" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/105033869_3305283132837378_6609863409130475606_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=tGtRP-Ss8AMAX-WvCzY&_nc_ht=scontent.fhan2-1.fna&oh=e1629833ddac424ac60e4c9d0fe916be&oe=5F17E141"></img>

                    <button type="button" className="btn_create" onClick={this.handleClickCreate} >
                        <FontAwesomeIcon icon={faPlus} className="icon_add" />
                            Create New Project
                    </button>
                    <div className="list_menu">
                        <a className="project active" onClick={this.handleClickProject1}>
                            <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 1</a>
                        <a className="project" onClick={this.handleClickProject2}>
                            <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 2
            </a>
                        <a href="" className="project" onClick={this.handleClickProject3}>
                            <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 3
            </a>
                        <a href="" className="project" onClick={this.handleClickProject4}>
                            <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 4
            </a>
                        <a href="" className="project" onClick={this.handleClickProject5}>
                            <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 5
            </a>

                    </div>
                </div>
                <div className="warrper_model">
                    <div className="dashboardRight">
                        <div className="dashboardInfo">
                            <div className="info">
                                <p className="text-name">Nguyen Phi Le</p>
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </div>
                        </div>
                        <div className="dashboardModelSetting">
                            <p className="text_modelsetting">Model Setting</p>
                            <div id="model_setting">
                                <div className="chart_model">
                                    <p className="text">Please choose location you want to make predict</p>
                                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105407240_194916291854405_4722480374516946193_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=_3QTGqNAo6UAX9ZcmON&_nc_ht=scontent.fhan2-3.fna&oh=ae5ede919a38326a13c6ebcc70b3bc0d&oe=5F1A5DBE"></img>
                                </div>
                                <div className="list_info_model">
                                    <p className="text">Your Trained Models</p>
                                    <div className="model">
                                        <p className="text_model">Model 01</p>
                                        <div className="info_model">
                                            <div className="column">
                                                <p>Data field you have: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 03</a>
                                            </div>
                                            <div className="column">
                                                <p>Data field you want to predict: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 04</a>
                                            </div>
                                            <div className="column">
                                                <p>Time range you want to predict: </p>
                                                <a href="#">1000</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="model">
                                        <p className="text_model">Model 02</p>
                                        <div className="info_model">
                                            <div className="column">
                                                <p>Data field you have: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 03</a>
                                            </div>
                                            <div className="column">
                                                <p>Data field you want to predict: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 04</a>
                                            </div>
                                            <div className="column">
                                                <p>Time range you want to predict: </p>
                                                <a href="#">1000</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="model">
                                        <p className="text_model">Model 03</p>
                                        <div className="info_model">
                                            <div className="column">
                                                <p>Data field you have: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 03</a>
                                            </div>
                                            <div className="column">
                                                <p>Data field you want to predict: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 04</a>
                                            </div>
                                            <div className="column">
                                                <p>Time range you want to predict: </p>
                                                <a href="#">1000</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="model">
                                        <p className="text_model">Model 04</p>
                                        <div className="info_model">
                                            <div className="column">
                                                <p>Data field you have: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 03</a>
                                            </div>
                                            <div className="column">
                                                <p>Data field you want to predict: </p>
                                                <a href="#">Filed 01,</a>
                                                <a href="#"> Filed 02,</a>
                                                <a href="#"> Filed 04</a>
                                            </div>
                                            <div className="column">
                                                <p>Time range you want to predict: </p>
                                                <a href="#">1000</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recommend_model ">
                                    <p className="text">Our Recommend Models</p>
                                    <div className="model our_model">
                                        <p className="text_model">Model 01</p>
                                    </div>
                                    <div className="model our_model">
                                        <p className="text_model">Model 02</p>
                                    </div>
                                    <div className="model our_model">
                                        <p className="text_model">Model 03</p>
                                    </div>
                                    <div className="model our_model">
                                        <p className="text_model">Model 04</p>
                                    </div>
                                </div>
                                <div className="train_next">
                                    <button className="btn_train">
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span className="text_train">Train a new Model</span>
                                    </button>
                                    <button className="btn_next">
                                        <span className="text_next">Next</span>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModelSetting