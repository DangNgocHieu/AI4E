import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCube, faExchangeAlt, faUser, faDollarSign, faMale, faChartBar, faTh, faTags, faCheckSquare, faReplyAll, faCompressArrowsAlt, faFileAlt, faShareAlt, faUndo, faTable, faFileInvoiceDollar, faChartPie, faShare, faCircle, faAtom, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getProject, cookieManager } from '../../api handler/api_manager'
import { Redirect } from 'react-router-dom'
class Menu2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCreate: "",
      redirect: null,
      projectList: [],
      trained_models: [],
      domain_models: [],
      cur_project_id: null
    }

    this.handleClickCreate = this.handleClickCreate.bind(this);
  }

  async componentDidMount() {
    let user_id = cookieManager.getCookie('user_id')
    let projList = await getProject(user_id)
    console.log(projList)
    this.setState({ projectList: projList })
  }

  handleClickCreate() {
    this.setState(prevState => ({
      isCreate: "create"
    }));
    this.setState(prevState => ({ redirect: './Newproject' }));

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: {
          project_id: this.state.cur_project_id,
          trained_models: this.state.trained_models,
          domain_models: this.state.domain_models
        }
      }}></Redirect>

    }
  }

  render() {
    // if (this.state.redirect)
    //   return <Redirect to={this.state.redirect}></Redirect> 
    let btnTemplate = null

    if (this.state.projectList.length !== 0) {
      btnTemplate = this.state.projectList.map((project) => (
        <a className="project active" onClick={() => { this.setState({ trained_models: project.trained_models, domain_models: project.domain.domain_models, cur_project_id: project.project_id, redirect: './modeldetail' }) }} >
          <FontAwesomeIcon className="icon-menu" icon={faCube} />
          {project.name}
        </a>
      ))
    }


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
            {btnTemplate}
          </div>
        </div>
      </div>

    );
  }
}

export default Menu2;
