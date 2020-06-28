
import React, { Component, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link, Redirect } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserInfo from '../../../component/userInfo';
import { cookieManager, createAndTrain } from '../../../api handler/api_manager'
import Async from 'react-async'
import axios from 'axios'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      redirect: null
    }
  }

  // isAsync = () => {
  //   if (this.state.async) {
  //     return (<Async promiseFn={createAndTrain({
  //       user_id: cookieManager.getCookie('user_id'),
  //       project_id: cookieManager.getCookie('project_id'),
  //       model_name: this.props.name,
  //       config: {
  //         time_step: 0,
  //         input_fields: this.props.input,
  //         output_fields: this.props.output,
  //         interval: this.props.interval
  //       }
  //     })}>
  //       <Async.Loading>Loading...</Async.Loading>
  //       <Async.Fulfilled>
  //         {data => {
  //           console.log('RESULT ACCOMPLISH')
  //           this.setState({ result: data, redirect: "/progress" })
  //           return (<button><Link to={{ pathname: "/progress", query: { result: data } }}></Link></button>)
  //         }}
  //       </Async.Fulfilled>
  //       <Async.Rejected>
  //         {error => `Something went wrong: ${error.message}`}
  //       </Async.Rejected>
  //       {({ data, err, isLoading }) => {
  //         if (isLoading) return "Loading..."
  //         if (err) return `Something went wrong: ${err.message}`

  //         if (data) {
  //           console.log('RESULT ACCOMPLISH')
  //           this.setState({ result: data, redirect: "/progress" })
  //           return (
  //             <button><Link to={{ pathname: "/progress", query: { result: data } }}></Link></button>
  //           )
  //         }
  //       }}
  //     </Async>)
  //   }
  // }

  render() {
    // let result = null

    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {
          result: this.state.result
        }
      }} />
    }

    return (
      <div id="test">

        <button class="list-group-item btn-dark-blue" style={{ marginBottom: '1rem' }}>{this.props.name}</button>

        <Card>
          <CardBody>
            <div className="info_model">
              <div className="column">
              </div>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-train" onClick={() => {
                //this.setState({ async: true })
                const base_url = "http://1641c841f993.ngrok.io"

                let trainInfos = {
                  user_id: cookieManager.getCookie('user_id'),
                  project_id: cookieManager.getCookie('project_id'),
                  model_name: this.props.name,
                  config: {
                    time_step: 0,
                    input_fields: this.props.input,
                    output_fields: this.props.output,
                    interval: this.props.interval
                  }
                }
                let model_id = null
                axios.post(base_url + '/api/model/create', trainInfos)
                  .then((response) => {
                    if (response.data.status === 'success') {
                      console.log("INSIDE TRAIN")
                      model_id = response.data.model_id
                      trainInfos['model_id'] = model_id
                      trainInfos['data_id'] = localStorage.getItem('data_id')
                      axios.post(base_url + '/api/model/train', trainInfos)
                        .then((response) => {
                          if (response.data.status === 'success') {
                            this.setState({ result: response.data.result, redirect: '/progress' })
                          }
                        }, (error) => {
                          console.log(error)
                        });
                    }
                  }, (error) => {
                    console.log(error)
                  })

              }}>
                {/* <Link to={{ pathname: "/progress", query: { result: result } }}>Start training</Link> */}
                Start Training
              </button>

            </div>

          </CardBody>
        </Card>
      </div>
    );
  }
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
                    <Example input={this.props.input} output={this.props.output} interval={this.props.interval} data_id={this.props.data_id} name='XGBoost' />
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