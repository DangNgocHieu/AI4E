
import React, { Component, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserInfo from '../../../component/userInfo';
import { trainModel, cookieManager } from '../../../api handler/api_manager'
function Example(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let train_obj = {
    user_id: cookieManager.getCookie('user_id'),
    project_id: cookieManager.getCookie('project_id'),
    model_name: props.name,
    config: {
      time_step: 0,
      input_fields: props.input,
      output_fields: props.output,
      interval: props.interval
    }
  }

  console.log(props.name)
  return (
    <div id="test">

      <button class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name}</button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>

            <div className="info_model">
              <div className="column">
                Accuracy with our data is: 96%
                                        </div>

            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-train"><Link to="/progress" onClick={() => { trainModel(JSON.stringify(train_obj)) }}>Start training</Link></button>

            </div>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}


function Example1() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="test">

      <button class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem' }}>Model name</button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>

            <div className="info_model">
              <div className="column">
                <p>This model is not recommended for your need. But you may still want to try.</p>
              </div>

            </div>
            <div class="btn-group" role="group" aria-label="Basic example">

              <button type="button" class="btn btn-train"><Link to="/progress">Start training</Link></button>

            </div>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

class Recommended extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.input)
    return (
      <div className="wrraper_contaier">
        <div className="dashboardRight">
          <UserInfo />
          <div className="dashboardModelSetting">
            <h2 className="text_modelsetting">Choose one model and start training</h2>
            <div id="model_setting">


              <div class="row list-model">



                <div class="col-5">
                  <h2>Recommended Models</h2>

                  <div class="list-group">
                    <Example input={this.props.input} output={this.props.output} interval={this.props.interval} name='XGBoost' />
                  </div>

                </div>
                {/* <div class="col-1"></div> */}
                <div class="col-5">
                  <h2>Others</h2>
                  <div class="list-group group2">
                    <Example1 />
                    <Example1 />
                    <Example1 />
                    {/* <a href="#" class="list-group-item btn-ultra-voilet">First item</a>
      <a href="#" class="list-group-item btn-ultra-voilet">Second item</a>
      <a href="#" class="list-group-item btn-ultra-voilet">Third item</a> */}
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
export default Recommended;