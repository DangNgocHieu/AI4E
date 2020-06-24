import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./index.scss"
class Domain extends Component {
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
                <div className="wrraper_domain">
                    <div className="dashboardRight">
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
                    <div className="dashboardDomain01">
                        <p className="text_domain">Domain 01</p>
                        <div id="domain_one">
                            <div className="group_text_filed">
                                <p className="text_choose">Please choose what data field you have: </p>
                                <div className="check_box">
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 3</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 4</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 5</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 6</label>
                                    </li>
                                </div>
                            </div>
                            <div className="group_text_filed">
                                <p className="text_choose">Please choose what data field you want to predict: </p>
                                <div className="check_box">
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 3</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 4</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 5</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="c1" name="cc" />
                                        <label for="c1"><span></span>Filed 6</label>
                                    </li>
                                </div>
                            </div>
                            <div className="group_text_filed">
                                <p className="text_choose">Please choose time range you want to predict: </p>
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

                                <button className="btn_pre">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                    <span className="text_pre">Previous</span>
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
            </div >
        );
    }
}
export default Domain;