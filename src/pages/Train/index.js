import Upload from '../../component/Upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCube, faExchangeAlt, faUser, faDollarSign, faMale, faChartBar, faTh, faTags, faCheckSquare, faReplyAll, faCompressArrowsAlt, faFileAlt, faShareAlt, faUndo, faTable, faFileInvoiceDollar, faChartPie, faShare, faCircle, faAtom, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom'
import React, { Component } from 'react';

class Train extends Component {
    render() {
        return (
            
                <div id="train"> 
                <div class="row">
                    <div class="col-12">
                        <div class= "row">
                        <Upload/>
    </div>                    
                    
                    </div>
            
                    
                </div>
                
                </div>

            
        )
    }
}
export default Train;