import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../../api handler/api_manager'
import { Redirect } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let target = event.target
        let name = target.name
        let val = target.value

        this.setState({
            [name]: val
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        alert('username: ' + this.state.username + '\npassword: ' + this.state.password)

        let status = await login(this.state.username, this.state.password)
        alert(status)
        if (status === 'success') {
            this.setState({
                redirect: '/dashboard'
            })
        }
        else
            alert('Invalid account')
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect}></Redirect>

        return (
            <form method='POST' onSubmit={this.handleSubmit}>
                <div className="username">
                    <p className="text">UserName</p>
                    <input data-val="true" data-val-required="Nhập tên đăng nhập!" id="UserName" name="username" placeholder="Tên đăng nhập" tabindex="1" type="text" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="password">
                    <p className="text">Password</p>
                    <input data-val="true" data-val-required="Nhập mật khẩu!" id="Password" name="password" placeholder="Nhập mật khẩu" tabindex="2" type="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="login">
                    <input class="btn_login" type="submit" value='Log In' />

                </div>
            </form>
        )
    }
}

export default LoginForm