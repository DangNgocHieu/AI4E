import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox from './box';
import Menu2 from '../../Menu2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { getDomainField, uploadFile, cookieManager } from '../../../api handler/api_manager';

class TrainAttr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionFilterList: false,
            checkedInputItems: new Map(),
            checkedOutputItems: new Map(),
            interval: null,
            fields: [],
            uploadedFile: null,
            redirect: null,
            input: [],
            output: [],
            data_id: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOutputChange = this.handleOutputChange.bind(this);
    }
    showList = () => this.setState(prevState => ({
        showActionFilterList: !prevState.showActionFilterList
    }));

    async componentDidMount() {
        //TODO: pass domainID from next Btn
        let dm_name = this.props.history.location.query.domainName
        let field = await getDomainField(dm_name);
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

    handleUploadFile = (e) => {
        this.setState({
            uploadedFile: e.target.files[0]
        })
    }

    handleUploadBtn = (e) => {
        let data_id = null;
        if (this.state.uploadedFile !== null) {
            data_id = uploadFile(this.state.uploadedFile)
        }
        if (!data_id) {
            data_id = cookieManager.getCookie('data_id')
        }
        this.setState({ data_id: data_id })
    }

    handleSubmitBtn = (e) => {

        let input = []
        let output = []
        for (let [k, v] of this.state.checkedInputItems) {
            input.push(k)
        };

        for (let [k, v] of this.state.checkedOutputItems) {
            output.push(k)
        };



        // console.log(input)
        this.setState({
            redirect: '/Recommend',
            input: input,
            output: output
        })

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    input_fields: this.state.input,
                    output_fields: this.state.output,
                    interval: this.state.interval,
                    data_id: this.state.data_id
                }
            }} />
        }
    }

    radioChecked = (e) => {
        console.log(e.target.value)
        this.setState({ interval: e.currentTarget.value })

        e.target.checked = true
    }

    render() {

        let infieldTemplate = null
        let outfieldTemplate = null

        if (this.state.fields.length !== 0) {
            infieldTemplate = this.state.fields.map(field => (
                <div class="box">
                    <label key={field}>
                        <Checkbox class="box" name={field} checked={this.state.checkedInputItems.get(field)} onChange={this.handleInputChange} />
                        {field}
                    </label>
                </div>
            ))

            outfieldTemplate = this.state.fields.map(field => (
                <div class="box">
                    <label key={field}>
                        <Checkbox class="box" name={field} checked={this.state.checkedOutputItems.get(field)} onChange={this.handleOutputChange} />
                        {field}
                    </label>
                </div>
            ))
        }



        return (
            <div id="upload">
                {this.renderRedirect()}
                <div class="row ">
                    <div class="col-4">
                        <Menu2 />
                    </div>
                    <div class="col-7 bg-grey no-margin">
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
                            <div class="input-field mt-5 text-left">

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

                                <div className="group_text_filed  mt-4 ">
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
                                            <li class="mb-3">
                                                <input type="radio" name="cc" value="day" onChange={this.radioChecked} checked={this.state.interval === 'day'} />
                                                <label><span></span>1 day</label>
                                            </li>
                                            <li class="mb-3">
                                                <input type="radio" name="cc" value="month" onChange={this.radioChecked} checked={this.state.interval === 'month'} />
                                                <label><span></span>1 month</label>
                                            </li>
                                            <li class="mb-3">
                                                <input type="radio" name="cc" value="year" onChange={this.radioChecked} checked={this.state.interval === 'year'} />
                                                <label><span></span>1 year</label>
                                            </li>
                                        </div>
                                    </div>



                                    <div class="upload-btn-wrapper">
                                        <button class="btn">Browse..</button>
                                        <input type="file" name="myfile" onChange={this.handleUploadFile} />
                                    </div>
                                    <div className="pre_next">
                                        <button className="btn_next" onClick={this.handleUploadBtn}>
                                            <span className="text_next">Upload File</span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>

                                        <button className="btn_next" onClick={this.handleSubmitBtn}>
                                            <span className="text_next">Train</span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
export default TrainAttr;
