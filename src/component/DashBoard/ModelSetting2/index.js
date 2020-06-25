import React, { Component, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getTrainedModels, getDomainModel, cookieManager } from '../../../api handler/api_manager';

function ModelList(props) {

  const [isOpen, setIsOpen] = useState(false);
  var title_ = "Model name";
  const toggle = () => setIsOpen(!isOpen);

  let input_fields = props.model.input_fields.map((field) => (
    <a href='#'>{field}&nbsp;</a>
  ))

  let output_fields = props.model.output_fields.map((field) => (
    <a href='#'>{field}&nbsp;</a>
  ))

  return (
    <div id="test">

      <a href="#" class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem' }}>Model name</a>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>

            <div className="info_model">
              <div className="column">
                <p>Data field you have: </p>
                {input_fields}
              </div>
              <div className="column">
                <p>Data field you want to predict: </p>
                {output_fields}
              </div>
              <div className="column">
                <p>Time range you want to predict: </p>
                <a href="#">{props.model.interval_unit}</a>
              </div>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-test"><Link to="/test">Test</Link></button>
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
    this.state = {
      train_model: [],
      domain_model: []
    }
  }

  async componentDidMount() {
    let user_id = cookieManager.getCookie('user_id')
    let domain_id = this.props.domain_id

    let trained_model = await getTrainedModels(user_id, domain_id)
    let domain_model = await getDomainModel(domain_id)
    this.setState({ trained_model: trained_model, domain_model: domain_model }, alert('API called successfully!'))
  }

  render() {

    let trained_model_template = null
    let domain_model_template = null

    if (this.state.train_model.length !== 0)
      trained_model_template = this.state.train_model.map((model) => (
        <ModelList model={model} />
      ))
    if (this.state.domain_model.length !== 0)
      trained_model_template = this.state.domain_model.map((model) => (
        <ModelList model={model} />
      ))

    return (
      <div className="wrraper_contaier">
        <div className="dashboardRight">
          <div className="dashboardInfo">
            <div className="back">
              <FontAwesomeIcon icon={faArrowLeft} />
              <Link to={"/dashboard"}>Back</Link>
            </div>
            <div className="info">
              <p className="text-name">Nguyen Phi Le</p>
              <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
              <FontAwesomeIcon className="icon" icon={faChevronDown} />
            </div>
          </div>
          <div className="dashboardModelSetting">
            <p className="text_modelsetting">Model Setting</p>
            <div id="model_setting">


              <div class="row">

                <div class="col-5">
                  <button type="button" class="btn title-btn"><h2>Trained Models</h2></button>

                  <div class="list-group">
                    {trained_model_template}
                  </div>

                </div>
                {/* <div class="col-1"></div> */}
                <div class="col-5">
                  <button class="btn title-btn"><h2>Recommended Models</h2></button>
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