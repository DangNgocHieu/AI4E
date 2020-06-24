import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCube, faPlus } from '@fortawesome/free-solid-svg-icons';
import ContainerDashBoard from '../DashBoard/ContainerDashBoard';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChange: "true",
     
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
      isChange: "create"
    }));    
    console.log(this.state.isChange);
    
  }
  handleClickProject1() {
    this.setState(prevState => ({
      isChange: "Project1"
    }));    
  }
  handleClickProject2() {
    this.setState(prevState => ({
      isChange: "Project2"
    }));    
  }
  handleClickProject3() {
    this.setState(prevState => ({
      isChange: "Project3"
    }));
    
  }
  handleClickProject4() {
    this.setState(prevState => ({
      isChange: "Project4"
    }));
    
  }
  handleClickProject5() {
    this.setState(prevState => ({
      isChange: "Project5"
    }));
    
  }
  render() {

    return (
      <div id="menu" >
        

        
        <div className="wrraper ">
          <img class="img_title" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/105033869_3305283132837378_6609863409130475606_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=tGtRP-Ss8AMAX-WvCzY&_nc_ht=scontent.fhan2-1.fna&oh=e1629833ddac424ac60e4c9d0fe916be&oe=5F17E141"></img>

          <button type="button" className="btn_create" onClick={this.handleClickCreate} >
            <FontAwesomeIcon icon={faPlus} className="icon_add" />
             Create New Project
             </button>
          <div className="list_menu">
            <a className="project active" onClick={this.handleClickProject1}>
              <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 1</a>
            <a className="project" onClick={this.handleClickProject2}>
              <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 2
            </a>
            <a href="" className="project" onClick={this.handleClickProject3}>
              <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 3
            </a>
            <a href="" className="project" onClick={this.handleClickProject4}>
              <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 4
            </a>
            <a href="" className="project" onClick={this.handleClickProject5}>
              <FontAwesomeIcon className="icon_menu" icon={faCube} />
                  Project 5
            </a>

          </div>
        </div>
        <div className="menu_right">
          <ContainerDashBoard isChange={this.state.isChange} />
        </div>

      </div>
    );
  }
}

export default Menu;
