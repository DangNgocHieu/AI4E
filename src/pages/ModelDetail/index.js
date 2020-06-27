import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu2 from '../../component/Menu2';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModelSetting2 from '../../component/DashBoard/ModelSetting2';
import { LabelList } from 'recharts';
import Create from '../../component/DashBoard/Create';

class ModelDetail extends Component {
    render() {
        let trained_models = this.props.history.location.state.trained_models.list_models
        let domain_models = this.props.history.location.state.domain_models
        console.log(trained_models)
        return (

            <div id="modeldetail">
                <div class="row">
                    <div class="col-3">
                        <Menu2 />
                    </div>

                    <div class="col-8">
                        <ModelSetting2 domain_models={domain_models} trained_models={trained_models} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelDetail;