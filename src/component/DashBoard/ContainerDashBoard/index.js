import React, { Component } from 'react';

import Menu from '../../Menu'
import ProjectOne from '../ProjectOne';
import Create from '../Create';
import Domain01 from '../Domain01';
import ModelSetting from '../ModelSetting'

class ContainerDashBoard extends Component {

    render() {
        if (this.props.isChange === "create") {
            return (
                <div id="containerdashboard">
                    <Create />
                </div>

            );
        }
        else {
            return (
                <div id="containerdashboard">
                <ProjectOne />
            </div>
            );
        }
    }
}
export default ContainerDashBoard;