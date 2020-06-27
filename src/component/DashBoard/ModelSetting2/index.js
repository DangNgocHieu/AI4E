import React, { Component, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserInfo from '../../userInfo';
// import { getTrainedModels, getDomainModel, cookieManager } from '../../../api handler/api_manager';

function ModelList(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (props.isTrained === 'true') {
    let config = props.model.config
    let in_fields = config.input_fields.map((field) => (
      <a href='#'>{field}&nbsp;</a>
    ))

    let out_fields = config.output_fields.map((field) => (
      <a href='#'>{field}&nbsp;</a>
    ))

    return (
      <div id="test">

        <button class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem', minWidth: '85%' }}>{props.model.name}</button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>

              <div className="info_model">
                <div className="column">
                  <p>Data field you have: </p>
                  {in_fields}
                </div>
                <div className="column">
                  <p>Data field you want to predict: </p>
                  {out_fields}
                </div>
                <div className="column">
                  <p>Time range you want to predict: </p>
                  <a href="#">{props.model.config.interval_unit}</a>
                </div>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-test"><Link to={{ pathname: "/Test", query: { model_id: props.model.model_id, project_id: props.project_id } }}>Test</Link></button>
                <button type="button" class="btn btn-train"><Link to="/domain">Continue training</Link></button>

              </div>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

  else
    return (
      <div id="test">

        <button class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem', minWidth: '85%' }}>{props.model}</button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-test"><Link to="/test">Train</Link></button>
                <button type="button" class="btn btn-train"><Link to="/domain">Continue training</Link></button>
              </div>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
}

class ModelSetting2 extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    console.log(this.props.trained_models)
    let trained_model_template = null
    let domain_model_template = null
    if (this.props.trained_models.length !== 0)
      trained_model_template = this.props.trained_models.map((model) => (
        <ModelList model={model} isTrained='true' project_id={this.props.project_id} />
      ))
    if (this.props.domain_models.length !== 0)
      domain_model_template = this.props.domain_models.map((model) => (
        <ModelList model={model} isTrained='false' />
      ))

    return (
      <div className="wrraper_contaier">
        <div className="dashboardRight">
          <UserInfo />
          <div className="dashboardModelSetting">
            <p className="text_modelsetting"></p>
            <div id="model_setting">


              <div class="row">

                <div class="col-5">
                  <div class="title-btn"><h2>Your Models</h2></div>

                  <div class="list-group">
                    {trained_model_template}
                  </div>

                </div>
                {/* <div class="col-1"></div> */}
                <div class="col-5">
                  <div class="title-btn"><h2>Recommended Models</h2></div>
                  <div class="list-group group2">
                    {domain_model_template}
                  </div>

                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default ModelSetting2;