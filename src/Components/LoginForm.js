import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div id="login-div">
                <form id="login-form">
                    <h3>Log In</h3>

                    <div>
                        <input type="text" id="name" className="form-control"></input>
                        <label for="name">Username</label>
                    </div>
                    <div>
                        <input type="password" id="pw" className="form-control"></input>
                        <label for="pw">Password</label>
                    </div>
                    <button className="btn btn-primary">Log in</button>
                </form>
            </div>
        );
    }
}