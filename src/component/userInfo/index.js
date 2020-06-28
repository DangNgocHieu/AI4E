import React, { Component, useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
class UserInfo extends Component {
    render() {
        return (
            <div className="dashboardInfo">
                        <div className="back">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        <Link to={"/"}>Back</Link>
                        </div>
                        <div className="info">
                            <p className="text-name">Nguyen Phi Le</p>
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                            
                            <Link to='/'><FontAwesomeIcon className="icon ava-icon" icon={faSignOutAlt} /></Link>
                        </div>
                    </div>
                    
        )
    }
}
export default UserInfo;