import React, {
    Component
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import "./index.scss"
import { getDomain } from '../../../api handler/api_manager.js'
import Domain01 from "../TrainAttr"
import {
    Link
} from 'react-router-dom';
import UserInfo from '../../userInfo';
class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            domain: false,
            domain_list: []
        }
    }
    async componentDidMount() {
        let domains = await getDomain()
        this.setState({ domain_list: domains })
    }

    handClick = () => {
        this.setState({
            domain: !this.state.domain
        })
    }

    render() {
        let domains = null
        if (this.state.domain_list.length === 0) {
            return null
        }
        else {

            domains = this.state.domain_list.map((dm) => (
                <div className="domain">
                    <Link className="link btn_domain" to={{ pathname: "/Domain", query: { domainName: dm.name } }}><button className="btn_domain" >{dm.name.toUpperCase()}
                    </button></Link>
                    {/* <p>{dm.description}</p> */}
                </div>
            ))
        }
        return (<div className="wrraper_container">
            <div className="dashboardRight">
                {/* <div className="dashboardInfo">
                    <p className="text-name">Nguyen Phi Le</p>
                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                    <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </div> */}
                <UserInfo />
                <div className="dashboardCreate">
                    <h2 className="text_create">Create New Project</h2>
                    <div id="create">
                        <p className="text_domain">Please choose a Domain</p>
                        <div className="list_domain">
                            {domains}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default Create