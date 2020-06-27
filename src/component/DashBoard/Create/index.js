import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./index.scss"
import Domain01 from "../Domain01"
import { Link } from 'react-router-dom';
import UserInfo from '../../../component/userInfo';
class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            domain: false
        }
    }
    handClick = () => {
        this.setState({
            domain: !this.state.domain
        })
        console.log(this.state.domain);

    }
    render() {
        return (
            <div className="wrraper_contaier">
                <div className="dashboardRight">
                    <UserInfo/>
                    <div className="dashboardCreate text-center">
                        <p className="text_create">Create New Project</p>
                        <div id="create" className="text-center">
                            <p className="text_domain">Please choose a Domain</p>
                            <div className="list_domain">
                                <div className="domain">
                                    <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 01</button></Link>
                                    
                                </div>
                                <div className="domain">
                                <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 02</button></Link>
                                </div>
                                <div className="domain">
                                <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 03</button></Link>
                                </div>
                                <div className="domain">
                                <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 04</button></Link>
                                </div>
                                <div className="domain">
                                <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 05</button></Link>
                                </div>
                                <div className="domain">
                                <Link className="link btn_domain"  to="/Domain"><button className="btn_domain" >Domain 06</button></Link>
                                </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>);
    }
}
export default Create;