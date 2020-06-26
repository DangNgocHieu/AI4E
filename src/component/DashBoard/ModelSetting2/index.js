
import React, { Component, useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowLeft, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Example(model_name) {
  
    const [isOpen, setIsOpen] = useState(false);
    var title_ = "Model name";
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div id="test">
        
        <a href="#" class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem' }}>Model name</a>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
           
            <div className="info_model">
                                        <div className="column">
                                            <p>Data field you have: </p>
                                            <a href="#">Filed 01,</a>
                                            <a href="#"> Filed 02,</a>
                                            <a href="#"> Filed 03</a>
                                        </div>
                                        <div className="column">
                                            <p>Data field you want to predict: </p>
                                            <a href="#">Filed 01,</a>
                                            <a href="#"> Filed 02,</a>
                                            <a href="#"> Filed 04</a>
                                        </div>
                                        <div className="column">
                                            <p>Time range you want to predict: </p>
                                            <a href="#">1000</a>
                                        </div>
                                    </div>
            <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-test"><Link to="/test">Test</Link></button>
  <button type="button" class="btn btn-train"><Link to="/domain">Continue training</Link></button>
  
</div>
            
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

class ModelSetting2 extends Component {
    render() {
        return (
            <div className="wrraper_contaier">
                <div className="dashboardRight">
                    <div className="dashboardInfo">
                        <div className="back">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        <Link to={"/dashboard"}>Back</Link>
                        </div>
                        <div className="info">
                            <p className="text-name">Nguyen Phi Le</p>
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/105482679_317488752589979_7247942203476025085_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=SEpidIU1VuUAX-H_7h8&_nc_ht=scontent.fhan2-3.fna&oh=b51a82c2a4d047565a9fbf7ca2ef25b5&oe=5F17B4A6"></img>
                            <FontAwesomeIcon className="icon" icon={faChevronDown} />
                        </div>
                    </div>
                    <div className="dashboardModelSetting">
                        <p className="text_modelsetting">Model Setting</p>
                        <div id="model_setting">
                            
                            
                        <div class="row list-model">
    

    
    <div class="col-5">
      <button type = "button" class="btn title-btn"><h2>Trained Models</h2></button>
      
      <div class="list-group">
        <Example/>
        <Example/>
        <Example/>
    </div>
    
    </div>
    {/* <div class="col-1"></div> */}
    <div class="col-5">
    <button class="btn title-btn"><h2>Recommended Models</h2></button>
      <div class="list-group group2">
        <Example/>
        <Example/>
        <Example/>
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
export default ModelSetting2;