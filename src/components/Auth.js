import React, {Component} from 'react'
import './auth.css';
import axios from 'axios';


class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password:''
        }
    }
    createNewUser(){
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(newUser)
        axios.post('/api/createuser', newUser).then((response  => {
            console.log(response)
        }))
    }




    render(){
        console.log(this.state)
        return(
            <div>
                <div className="auth-container">
                    <div>
                    <h4 className="user-name"> Username</h4>
                    <h4 className="pass-word"> Password</h4>
                    </div>
                    <input className="password" type="text" placeholder="Password" onChange={(e) => this.setState({password: e.target.value}) }></input>
                    <input className="username" type="text" placeholder="User Name" onChange={(e) => this.setState({username: e.target.value}) }></input>
                   
                    <button className="login">Login</button>
                    <button onClick={this.createNewUser.bind(this)}className="register">Register</button>
                    
                </div>
                
            </div>
        )
    }
}
export default Auth