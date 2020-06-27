import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox from './box';
import Menu2 from '../Menu2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { getDomainField, uploadFile } from '../../api handler/api_manager';

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionFilterList: false,
            checkedInputItems: new Map(),
            checkedOutputItems: new Map(),
            fields: [],
            uploadedFile: null,
            redirect: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOutputChange = this.handleOutputChange.bind(this);
    }
    showList = () => this.setState(prevState => ({
        showActionFilterList: !prevState.showActionFilterList
    }));

    async componentDidMount() {
        //TODO: pass domainID from next Btn
        let field = await getDomainField('1');
        alert('Field: ' + field[0])
        this.setState({ fields: field });
    }

    handleInputChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedInputItems: prevState.checkedInputItems.set(item, isChecked) }));
    }

    handleOutputChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedOutputItems: prevState.checkedOutputItems.set(item, isChecked) }));
    }

    handleUploadFile(e) {
        this.setState({
            uploadedFile: e.target.files[0]
        }, alert('file catched'))
    }

    handleSubmitBtn(e) {
        if (this.state.uploadedFile !== null) {
            uploadFile(this.state.uploadedFile)
        }

        this.setState({
            redirect: '/recommend'
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    input_fields: this.state.checkedInputItems,
                    output_fields: this.state.checkedOutputItems
                }
            }} />
        }

        let infieldTemplate = null
        let outfieldTemplate = null

        if (this.state.fields.length !== 0) {
            infieldTemplate = this.state.fields.map(field => (
                <div class="box">
                    <label key={field}>
                        <Checkbox class="box" name={field} checked={this.state.checkedInputItems} onChange={this.handleInputChange} />
                    </label>
                </div>
            ))

            outfieldTemplate = this.state.fields.map(field => (
                <div class="box">
                    <label key={field}>
                        <Checkbox class="box" name={field} checked={this.state.checkedOutputItems} onChange={this.handleOutputChange} />
                    </label>
                </div>
            ))
        }



        return (
            <div id="upload">
                <div class="row ">
                    <div class="col-4">
                        <Menu2 />
                    </div>
                    <div class="col-8 bg-grey no-margin">
                        <div class="wrraper_domain">
                            <div className="dashboardRight ">
                                <div className="dashboardInfo">
                                    <div className="back">
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        <Link className="link" to="/Dashboard">Back</Link>
                                    </div>
                                    <div className="info">
                                        <p className="text-name">Nguyen Phi Le</p>
                                        <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                                    </div>
                                </div>
                            </div>
                            <div class="input-field mt-5">

                                <div className="group_text_filed">
                                    <h2 className="text_choose">Please choose which data fields you have: </h2>
                                    <div class="form-check-inline">
                                        <React.Fragment>
                                            {
                                                infieldTemplate
                                            }
                                        </React.Fragment>
                                    </div>
                                </div>

                                <div className="group_text_filed  mt-4">
                                    <h2 className="text_choose">Please choose which data fields you want to predict: </h2>
                                    <div class="form-check-inline ">
                                        <React.Fragment>
                                            {
                                                outfieldTemplate
                                            }
                                        </React.Fragment>
                                    </div>

                                    <div className="group_text_filed">
                                        <h2 className="text_choose mt-4">Please choose time range you want to predict: </h2>
                                        <div className="choose_time">
                                            <li>
                                                <input type="checkbox" id="c1" name="cc" />
                                                <label for="c1"><span></span>1 day</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="c1" name="cc" />
                                                <label for="c1"><span></span>1 month</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="c1" name="cc" />
                                                <label for="c1"><span></span>1 year</label>
                                            </li>
                                        </div>
                                    </div>



                                    <div class="upload-btn-wrapper">
                                        <button class="btn">Data Upload</button>
                                        <input type="file" name="myfile" onChange={this.handleUploadFile} />
                                    </div>
                                    <div className="pre_next">
                                        <button className="btn_next" onClick={this.handleSubmitBtn}>
                                            <span className="text_next">See Result</span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>

                                    </div>
                                </div>

    
                            <div class="row">
                                <div class="col-5">
                                <Link to='/Progress'><button class="btn train-btn">Retrain Model</button></Link>
                                </div>
                                <div class="col-5">
                                <button class="btn train-btn">Continue training model</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        )
    }
}
export default Upload;
