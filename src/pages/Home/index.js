import React  from 'react';
import './index.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
export default function Home() {  
  return (
    <div id="home">         
     {/* <img className="img_banner" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/105361584_2330657780575465_8715217683182923322_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=devGENwmnl8AX_sc73b&_nc_ht=scontent.fhan2-4.fna&oh=0460284f0d99659ebe209b60a32112ba&oe=5F15689E"></img> */}
      <div className="home-info">
         <img class="img_title" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/105519883_329165518076048_2628760172393083726_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=XW2PLHXg3R0AX-hKmiv&_nc_ht=scontent.fhan2-1.fna&oh=742d75d060287a3b127c0fdb20127b76&oe=5F17DCEB"></img>
        
      </div>

      <section id="Banner" class="content-section">
            <div class="container content-wrap text-center">
                <h1>Environmental Platform</h1>
                <h2>
                    <em>A Platform Using Deep Learning Network To Make Predictions About Environmental Factors</em>
                </h2>
                <Link to="./login"><button class="btn btn-primary btn-xl smooth-scroll" id="test-apicall">Login</button></Link>
            </div>
            <div class="overlay"></div>
        </section>

      <div className="row other text-center">
        <span className="support">@AI4E 2020. All right reserved.</span>
      </div>
      
    </div>
  );
}

// export default Login;