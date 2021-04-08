import React, { Fragment, useState } from 'react';
import { Form, Button,Container } from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Register = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        accno: "",
        email: "",
        password:"",
        number: "",
        aadhar: ""

    });

    const { name, accno, email,password ,number , aadhar} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push('/userLogin');
    };
    return (
        
           
           <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" size="sm" name="name" value={name}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Account No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Account Number" size="sm" name="accno" value={accno}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your E-mail Address" size="sm" name="email" value={email}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your Password" size="sm" name="password" value={password}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Mobile No</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="number" value={number}
                            onChange={e => onInputChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Aadhar No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Aadhar Number" size="sm" name="aadhar" value={aadhar}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <button className="btn btn-primary btn-block">SignUp</button>
                    
                </Form>
                </Container>
                
        
    )
}
export default Register;
