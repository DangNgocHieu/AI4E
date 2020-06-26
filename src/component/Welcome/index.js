import React, { Component } from 'react';
// import Header from './../../component/Header';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModelSetting2 from '../../component/DashBoard/ModelSetting2';
import './index.scss';
class Welcome extends Component {
    render() {
        return (
            <div id="welcome">
                <h2>Welcome, Thuy Dung.</h2>
                <p>What are you waiting for? Let continue using our services.</p>
            </div>
        )
    }
}

export default Welcome;