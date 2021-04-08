import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Form, Row, Alert, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './AdminLogin.css';
const AdminLogin = () => {
	let history = useHistory();
    useEffect(() => {
        loadUsers();
    }, []);
    const [email, setUseremail] = useState('');
    const [password, setPassword] = useState('');
 
    const emailchange = (e) => {
 
        setUseremail(e.target.value);
 
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
                if (email == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return history.push('/dashboard');
                   
                } else {
                    if (i == users.length - 1) {
                        alert("User name and password are incorrect");
                    }
                }
            }
        }
        else {
            alert("Credentials are not valid");
        }
 
    }
    return (
        
        <div className="box">
		<h2> Admin Login</h2>
		<form>
			<div className="inputBox">
				<input type="email" name="email" onChange={emailchange} required/>
				<label for="email">Username</label>
			</div>
			<div className="inputBox">
				<input type="password" name="password" onChange={passwordchange} required/>
				<label for="password">Password</label>
			</div>
			<button className="btn" block onClick={onSubmit}>Submit</button>

        </form>
        </div>
        
    )
}

export default AdminLogin;
