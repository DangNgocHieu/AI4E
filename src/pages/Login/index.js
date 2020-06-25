import React, { Component } from 'react';
import LoginForm from '../../component/LoginForm'

class Login extends Component {
  render() {

    return (<div id="login">
      <img className="img_banner" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/105361584_2330657780575465_8715217683182923322_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=devGENwmnl8AX_sc73b&_nc_ht=scontent.fhan2-4.fna&oh=0460284f0d99659ebe209b60a32112ba&oe=5F15689E"></img>
      <div className="loginbox">
        <img class="img_title" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/105519883_329165518076048_2628760172393083726_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=XW2PLHXg3R0AX-hKmiv&_nc_ht=scontent.fhan2-1.fna&oh=742d75d060287a3b127c0fdb20127b76&oe=5F17DCEB"></img>
        <section className="formlogin">
          <LoginForm />
        </section>
      </div>
      <div className="other">
        <span className="support">@AI4E 2020. All right reserved.</span>
      </div>

    </div>)

  }
}

export default Login;
