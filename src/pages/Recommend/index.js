import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu2 from '../../component/Menu2';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModelSetting2 from '../../component/DashBoard/ModelSetting2';
import { LabelList } from 'recharts';

import Recommended from '../../component/DashBoard/Recommended';

class Recommend extends Component {
    render() {
        return(
            
                <div id="recommend">
                    <div className="row">
                        <div className="col-3">
                            <Menu2 />
                        </div>
                        <div className="col-8">
                            <Recommended />
                        </div>
                    </div>
                </div>

            
        )
    }
}

export default Recommend;