import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const UserView = () => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        accno: '',
        email: '',
        number: '',
        aadhar: ''
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }
    return (
            <Container>
                <Form >
                    <ListGroup>
                        <Card.Title >User Id:{user.id}</Card.Title><br />
                        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                        <ListGroup.Item>Account No: {user.accno}</ListGroup.Item>
                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                        <ListGroup.Item>Mobile No: {user.number}</ListGroup.Item>
                        <ListGroup.Item>Aadhar No: {user.aadhar}</ListGroup.Item>
                        <br />
                        <Link className="btn btn-primary" to="/dashboard">Back</Link>
                    </ListGroup>
                </Form>
            </Container>
    )
}
export default UserView;           