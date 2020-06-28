import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/TrainAttr';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { getDomainField, uploadFile } from '../../api handler/api_manager';
import { Form } from 'reactstrap';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createProject, cookieManager } from '../../api handler/api_manager'
import models from '../../data/bestmodels.json';


function CreateModelDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let inputField = ''
    const handleCloseAndRedirect = () => {
        setOpen(false);

        let user_id = cookieManager.getCookie('user_id')
        console.log(inputField)
        createProject(user_id, props.domainName, inputField)
    };


    return (
        <div>
            <Button class="dialog" variant="outlined" color="black" onClick={handleClickOpen}>
                Train your new model
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">What is your new project name?</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="projectname"
                        label="Project Name"
                        type="text"
                        fullWidth
                        onChange={(e) => { inputField = e.target.value }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Link to={{ pathname: "/TrainAttr", query: { domainName: props.domainName } }}><Button onClick={handleCloseAndRedirect} color="primary">
                        OK
            </Button></Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

class Domain extends Component {

    render() {
        let domain_name = this.props.history.location.query.domainName;
        console.log(domain_name);
        // let domain_name = "water";
        const modeldisplay = models[domain_name].map((model) => {
            return (
                <div className="description">
                    <label>{model.name}</label>
                    <p>This model is recommended to use in predicting PM2.5
              We trained and compared to other state-of-the-arts model like {model.other}</p>
                    <p>Current accuracy is: {model.accuracy}</p>
                    <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                </div>
            )
        })
        return (
            <div id="domain">
                <div className="row">
                    <div className="col-3">
                        <Menu2 />

                    </div>
                    <div className="col-8 text-center">
                        <UserInfo />
                        <h2 className="text-left">{domain_name.toUpperCase()}</h2>
                        <div className="newmodel text-left">
                            {/* <Link to={{ pathname: "/TrainAttr", query: { domainName:  } }} ><button className="btn new">Train your new model</button></Link> */}
                            <CreateModelDialog domainName={this.props.history.location.query.domainName} />
                        </div>
                        <h2>Our significant works</h2>
                        <div className="general-domain">
                            <div className="row">
                                <div class="col-2"></div>
                                <div className=" col-7 model model1">
                                    {modeldisplay}

                                </div>

                                {/* <div className="col-5 model">
                                <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p>
                                        <p>Current accuracy is: 99%</p>
                                        <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Domain;