import React, { Component } from "react";
import "./index.scss"
import axios from "axios"

class Project1 extends Component {

    componentDidMount() {
        axios.get('http://localhost:3000/modellist',)
    }

    render() {
        return (
            <div id="project">
                <p className="text_domain">Domain 01</p>
                <div className="chart">
                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/104437738_2704473473167719_3971967571801694842_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=30GIgoZXEU4AX-ryja9&_nc_ht=scontent.fhan2-3.fna&oh=b8b82411969368982d9986059b3b0ef7&oe=5F17A729"></img>
                    <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/104810429_1203919179984984_3403971174452972525_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=PhrRx_p36JYAX98hJa5&_nc_ht=scontent.fhan2-4.fna&oh=487760065d66e825a1c72ce7794677a4&oe=5F18BD24"></img>
                    <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/104981586_255208352437550_5389192417200094710_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=gSPHCQSgznAAX_gHdF6&_nc_ht=scontent.fhan2-4.fna&oh=98c8c044dce82acce8776e22854f56e3&oe=5F163487"></img>
                </div>
                <div className="footer">
                    <div className="text_data">
                        <p className="text_on">Data field you have: </p>
                        <p className="text_below">
                            <a>Filed 01</a>,
                            <a> Filed 02</a>,
                            <a> Filed 03</a>
                        </p>
                    </div>
                    <div className="text_data">
                        <p className="text_on">Data field you want to predict:  </p>
                        <p class="text_below" >
                            <a>Filed 01</a>,
                            <a> Filed 02</a>,
                            <a> Filed 04</a>
                        </p>
                    </div>
                    <div className="text_data">
                        <p className="text_on">Time range you want to predict: </p>
                        <p className="text_below">1000</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project1;