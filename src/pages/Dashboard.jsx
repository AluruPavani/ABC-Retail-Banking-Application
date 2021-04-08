import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUsers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        getUsers();
    }
    return (
        <div>

        <Nav className="justify-content-end">

<Nav.Link ><Link className= "btn btn-light"  to="/">Logout</Link></Nav.Link>
</Nav>
            <h3>Account Holder Details
            <Link className= "btn btn-light" to="/adduser">Add</Link>
            </h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Account No</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Aadhar No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.accno}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>{user.aadhar}</td>
                            <td>
                                <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </Table>

        </div>
    )
}
export default Dashboard;