import React, { Component } from 'react';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
import Menu from '../../component/Menu';
import Models from '../../component/Models';
import Domain1 from '../../component/DashBoard/Domain01';
import Upload from '../../component/Upload';
import Menu2 from '../../component/Menu2';
import UserInfo from '../../component/userInfo';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Form } from 'reactstrap';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// This is for fialog Form.

function CreateModelDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Link to='/upload'><Button onClick={handleClose} color="primary">
              OK
            </Button></Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

class Domain extends Component {
    render()
    {
        return(
            <div id="domain">
                <div className="row">
                    <div className="col-3">
                        <Menu2 />

                    </div>
                    <div className="col-8 text-center">
                        <UserInfo />
                        <h2 className="text-left">Domain Name</h2>
                        <div className="newmodel text-left">
                           
                       <CreateModelDialog/>
                          
                        </div>
                        <h2>Our significant works</h2>
                        <div className="general-domain">
                            <div className="row">
                                <div className="col-6 model model1">
                                    <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                
                                </div>
                                
                                <div className="col-5 model">
                                <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-5">
                                    <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>

      <Link to='/test'><button type="button" className="btn btn-test">Test</button></Link>
                                    </div>
                                
                                </div>
                                <div className="col-5">
                                <div className="description">
                                        <label>Model 1</label>
                                        <p>This model is recommended to use in predicting PM2.5
      We trained and compared to other state-of-the-arts model like AAA, BBB, CCC</p> 
      <p>Current accuracy is: 99%</p>
      <Link to='/test'><button type="button" className="btn btn-test ">Test</button></Link>
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

export default Domain;