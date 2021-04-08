import React, { useState, useEffect} from 'react';
import { Form,  Container } from 'react-bootstrap';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

const UserDataEdit = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:'',
        accno:'',
        email:'',
        number:'',
        aadhar:''
    });

    const {name, accno , email,number , aadhar } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect (() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`, user);
        history.push('/dashboard');
        
    };

    const loadUser = async() => {
        const result = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(result.data);
    }
   
    return (
        <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group >
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name"  name="name" value={name}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Account No</Form.Label>
                        <Form.Control type="text" placeholder="Enter account number"  name="accno" value={accno}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                   
                    <Form.Group >
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your E-mail Address"  name="email" value={email}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Mobile No</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Contact Number"  name="number" value={number}
                            onChange={e => onInputChange(e)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label >Aadhar No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Aadhar Number"  name="aadhar" value={aadhar}
                            onChange={e => onInputChange(e)} />

                    </Form.Group>
                    <button className="btn btn-primary btn-block">Update</button>
                </Form>
                </Container>
    )
}
export default UserDataEdit;