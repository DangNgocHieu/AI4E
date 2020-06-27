import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/TrainAttr';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import { Link } from 'react-router-dom';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { uploadFile, testModel, cookieManager } from '../../api handler/api_manager'
import { Redirect } from 'react-router-dom'
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploadedFile: null,
      redirect: null,
      model_id: null,
      project_id: null,
      data_id: null,
      result: null
    }
  }

  componentDidMount() {
    this.setState({
      model_id: this.props.history.location.query.model_id,
      project_id: this.props.history.location.query.project_id
    })
  }

  handleUploadFile = (e) => {
    this.setState({
      uploadedFile: e.target.files[0]
    }, alert('file catched'))
  }

  handleSubmitBtn = (e) => {

    let user_id = cookieManager.getCookie('user_id')
    let model_id = this.state.model_id
    let project_id = this.state.project_id
    console.log('PID ' + project_id + ' MID ' + model_id)
    let result = testModel(model_id, project_id, user_id, this.state.data_id)

    console.log(result)
    //TODO: pass result to result page
    this.setState({
      result: result,
      redirect: '/process'
    })
  }

  uploadDataBtn = () => {
    let data_id = null
    if (this.state.uploadedFile !== null) {
      data_id = uploadFile(this.state.uploadedFile)
    }
    console.log(data_id)
  }

  render() {
    if (this.state.redirect !== null) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {
          result: this.state.result
        }
      }} />
    }

    return (

      <div id="test">
        {/* <Upload /> */}
        <div class="row main text-center ">
          <div class="col-3">
            <Menu2 />
          </div>
          <div class="col-8 ">
            <div class="row text-center">
              <UserInfo />
              <div class="col text-center">
                <h2>Test Model</h2>
              </div>

            </div>
            <div class="col main-test">


              <div class="row">



                <div class="privacy-info text-justify col-5">
                  <h3>Privacy Policy</h3>
                  <p>We collects a variety of information and data that you provided directly to us. We process your data to provide you with the Predicting Service that you
                  have requested when accepting our Terms of Services. We may have a legitimate interest to process your data for testing, maintainance and for analytics, research, and reporting
                  purposes. Without your information and data, we cannot provide you with the Services you have requested or you may be limited in your use of the Services. By clicking "Upload data"
                  you agree to and accept our privacy policy. </p>
                </div>
                <div class="col-5 text-justify">
                  <h3>Data Requirement</h3>
                  <p>We support 2 types of data file: CSV, Excel.</p>

                </div>
              </div>
              <div class="row ">
                <div class="col text-center">

                  <input type="file" name="myfile" onChange={this.handleUploadFile} />
                  {/* <button class="btn btn-result">See result</button> */}
                </div>
              </div>
              <div class="row">
                <div class="col text-center">
                  <button class="btn btn-result mt-3" onClick={this.uploadDataBtn}>Upload</button>
                  <button class="btn btn-result mt-3" onClick={this.handleSubmitBtn}> <Link to="/result">See result</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;