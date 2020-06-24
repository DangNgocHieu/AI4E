import '../../';
import { Link } from 'react-router-dom';
import React, { Component, useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import Header from './../../component/Header';
import ContainerDashBoard from '../../component/DashBoard/ContainerDashBoard';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCube, faExchangeAlt, faUser, faDollarSign, faMale, faChartBar, faTh, faTags, faCheckSquare, faReplyAll, faCompressArrowsAlt, faFileAlt, faShareAlt, faUndo, faTable, faFileInvoiceDollar, faChartPie, faShare, faCircle, faAtom, faPlus } from '@fortawesome/free-solid-svg-icons';
import Menu2 from '../../component/Menu2';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Example(model_name) {
  
    const [isOpen, setIsOpen] = useState(false);
    var title_ = "Model name";
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        
        <a href="#" class="list-group-item btn-dark-blue" onClick={toggle} style={{ marginBottom: '1rem' }}>Model name</a>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
           
            <p>Description</p>
            <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-test">Test</button>
  <button type="button" class="btn btn-train">Continue training</button>
  
</div>
            
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
class Models extends Component {
    render() {
        return(
        
          
    <div id="test">
        
    <div class="row">
      <div class="col-sm-3">
      <Menu2/>
    
      </div>
      
      <div class="col-sm-8">
      <div class="domain-title">
      <h1>Domain name</h1>
    
      
      </div>
    <div class="row">
    
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
    
    
    
          
         
          
        );
      }
}

export default Models;