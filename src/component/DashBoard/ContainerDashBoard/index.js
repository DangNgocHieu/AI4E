import React, { Component } from 'react';

import Menu from '../../Menu'
import Project1 from '../Project1';
import Create from '../ProjectOne';



class ContainerDashBoard extends Component {

    render() {
        return (
            <div id="containerdashboard">
                <Menu />
                <Create />
            </div>

        );
    }
}
export default ContainerDashBoard;