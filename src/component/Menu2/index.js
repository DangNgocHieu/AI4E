import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCube, faExchangeAlt, faUser, faDollarSign, faMale, faChartBar, faTh, faTags, faCheckSquare, faReplyAll, faCompressArrowsAlt, faFileAlt, faShareAlt, faUndo, faTable, faFileInvoiceDollar, faChartPie, faShare, faCircle, faAtom, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom'
class Menu2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCreate: "",
      isProject1: "",
      isProject2: "",
      isProject3: "",
      isProject4: "",
      isProject5: "",

      redirect: null
    }

    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleClickProject1 = this.handleClickProject1.bind(this);
    this.handleClickProject2 = this.handleClickProject2.bind(this);
    this.handleClickProject3 = this.handleClickProject3.bind(this);
    this.handleClickProject4 = this.handleClickProject4.bind(this);
    this.handleClickProject5 = this.handleClickProject5.bind(this);
  }
  handleClickCreate() {
    this.setState(prevState => ({
      isCreate: "create"
      
    }));
    this.setState(prevState => ({redirect: './Newproject'}));
    
    console.log(this.state.isCreate);
    
  }
  handleClickProject1() {
    this.setState(prevState => ({
      isCreate: "Project1"
    }));
    this.setState({redirect: './dashboard'});
    
    console.log(this.state.isCreate);
    
  }
  handleClickProject2() {
    this.setState(prevState => ({
      isCreate: "Project2"
    }));
    this.setState({redirect: '/dashboard'});
    
    console.log(this.state.isCreate);
    
  }
  handleClickProject3() {
    this.setState(prevState => ({
      isCreate: "Project3"
    }));
    this.setState({redirect: '/dashboard'});
    
    console.log(this.state.isCreate);
    
  }
  handleClickProject4() {
    this.setState(prevState => ({
      isCreate: "Project4"
    }));
    this.setState({redirect: '/dashboard'});
    
    console.log(this.state.isCreate);
    
  }
  handleClickProject5() {
    this.setState(prevState => ({
      isCreate: "Project5"
    }));
    this.setState({redirect: './domain'});
    
    console.log(this.state.isCreate);
    
  }

  renderRedirect = () => {
     if (this.state.redirect)
      return <Redirect to={this.state.redirect}></Redirect> 
  }
  
  render() {
    // if (this.state.redirect)
    //   return <Redirect to={this.state.redirect}></Redirect> 
    return (
    
      <div id="menu2" >
           {this.renderRedirect()}
        <div className="wrraper ">
          <img class="img_title_1" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/105033869_3305283132837378_6609863409130475606_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=tGtRP-Ss8AMAX-WvCzY&_nc_ht=scontent.fhan2-1.fna&oh=e1629833ddac424ac60e4c9d0fe916be&oe=5F17E141"></img>

          <button type="button" className="btn_create" onClick={this.handleClickCreate} >
            <FontAwesomeIcon icon={faPlus} className="icon_add" />
            
             Create New Project
             </button>
          <div className="list-menu">
            <a className="project active" onClick={this.handleClickProject1}>
              <FontAwesomeIcon className="icon-menu" icon={faCube} />
             
                  Project 1</a>
            <a className="project" onClick={this.handleClickProject2}>
              <FontAwesomeIcon className="icon-menu" icon={faCube} />
                  Project 2
            </a>
            <a href="" className="project" onClick={this.handleClickProject3}>
              <FontAwesomeIcon className="icon-menu" icon={faCube} />
                  Project 3
            </a>
            <a href="" className="project" onClick={this.handleClickProject4}>
              <FontAwesomeIcon className="icon-menu" icon={faCube} />
                  Project 4
            </a>
            <a href="" className="project" onClick={this.handleClickProject5}>
              <FontAwesomeIcon className="icon-menu" icon={faCube} />
                  Project 5
            </a>

          </div>
        </div>
        </div>
      
    );
  }
}

export default Menu2;
