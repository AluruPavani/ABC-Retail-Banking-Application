import React, { Fragment, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        accno: "",
        email: "",
        number: "",
        aadhar: ""

    });

    const { name, accno, email, number , aadhar} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push('/dashboard');
    };
    return (
       
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group >
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name"  name="name" value={name}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Account No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your User Name"  name="accno" value={accno}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                
                    <Form.Group >
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your E-mail Address"  name="email" value={email}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Mobile No</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter your Phone Number"  name="number" value={number}
                            onChange={e => onInputChange(e)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Aadhar No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Aadhar Number"  name="aadhar" value={aadhar}
                            onChange={e => onInputChange(e)} />
                    </Form.Group>
                    <button className="btn btn-primary btn-block">Add User</button>
                    
                </Form>
               
    )
}
export default AddUser;