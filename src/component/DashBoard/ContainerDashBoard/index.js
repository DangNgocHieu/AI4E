import React, {
    Component
} from 'react';

import Menu from '../../Menu'
import ProjectOne from '../ProjectOne';
import Create from '../Create';
import Domain01 from '../Domain01';
import ModelSetting from '../ModelSetting'
import LineChart from '../LineChart'
import ModelSetting2 from '../ModelSetting2'

class ContainerDashBoard extends Component {

    render() {
        if (this.props.isChange === "create") {
            return (<
                div id="containerdashboard" >
                <
                    Create a={
                        this.props.isChange
                    }
                /> </div>

            );
        } else {
            return (<div id="containerdashboard" >
                <
                    ProjectOne />
            </div>
            );
        }
    }
}
export default ContainerDashBoard;