import React, { useState, useEffect} from 'react';
import './Login.css';
import axios from 'axios';
import { Container, Form, Row, Alert, Button } from 'react-bootstrap';
import {useHistory,useParams} from 'react-router-dom';
function UserLogin(){
    let history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        loadUsers();
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const emailchange = (e) => {
 
        setEmail(e.target.value);
 
    }
    const passwordchange = (e) => {
        setPassword(e.target.value);
 
    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3000/users')
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            });
    }
 
    const onSubmit = () => {
 
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(email);
        const isPasswordValid = passwordRegex.test(password);
 
        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < users.length; i++) {
                debugger
                if (email == users[i].email && password == users[i].password ) {
                    return history.push(`/userinfo/${users[i].id}`);
                   
                } else {
                    if (i == users.length - 1) {
                        alert("User name and password are in correct");
                    }
                }
            }
        }
        else {
            alert("Credentials are not valid");
        }
 
    }
    
    
        return (

            <div id="body" className="userlogin">

                <Row className="justify-content-md-center">

                    <div className="container">

                        <div className="row1">
                            <div className="container-wrapper">
                                <h1>LogIn</h1><br></br>
                                <div className="row">
                                    <i className="fas fa-envelope-square"></i>
                                    <input type="email" name="email"
                                        placeholder="Enter your email" onChange={emailchange}/>
                                </div><br></br>
                                <div className="row">
                                    <i className="fas fa-key"></i>
                                    <input type="password" name="password"
                                        placeholder="Enter your password" onChange={passwordchange}/>
                                </div><br></br>
                                <button className="btn" block onClick={onSubmit}>Submit</button>

                            </div>
                        </div>
                    </div>

                </Row>

            </div>


        )
    }

export default UserLogin;