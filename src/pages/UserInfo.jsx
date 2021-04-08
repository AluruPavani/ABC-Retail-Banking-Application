import React, {  useState, useEffect, cloneElement } from 'react';
import { Button, Card, ListGroup,  Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UserInfo = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        accno: ' ',
        email: ' ',
        number: ' ',
        aadhar: ' ',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }
    const userButton1 = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/addcurrent');
    }
    const userButton2 = () => {
        props.history.push('/withdraw');
    }
    const currentWithDrawAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    return (
        <center>


            <div className="userpage">
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.accno}</h3>
                <Row>
                    <Card style={{ width: '20rem', height:'12rem'}}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoPb-ZxDJMRk63hvIbgabCzJxwCtpgWKjyA&usqp=CAU" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ></Card.Text>
                            <Button variant="primary" size="sm" onClick={currentButton} block>Current</Button>
                        </Card.ImgOverlay>

                    </Card >
                   <br/><br/>
                    <Card style={{ width: '20rem' , height:'12rem'}} >
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsJ2NwqdVW_lg1NFRN6cpH4ks2PqTsW3paA&usqp=CAU" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                    
                </Row>

                <div  style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-outline-success btnAdd" onClick={userButton1}>Deposit</button><br/><br/>
                                <button class="btn btn-outline-danger btnAdd" onClick={userButton2}>Withdraw</button>
                                <br /><br />
                                <ListGroup>
                                    <ListGroup.Item>Account Holder Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>Account No: {user.accno}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Contact No: {user.number}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.balance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.AccountType.sType}</ListGroup.Item>
                                    <br />
                                </ListGroup>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-outline-success btnAdd" onClick={currentAddAmount}>Deposit</button><br/><br/>
                                <button class="btn btn-outline-danger btnAdd" onClick={currentWithDrawAmount}>Withdraw</button>
                                <br /><br />
                                <ListGroup>
                                    <ListGroup.Item>Account Holder Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>Account No: {user.accno}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Contact No: {user.number}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.AccountType.cType}</ListGroup.Item>
                                    <br />
                                </ListGroup>
                            </div>
                        )}
                </div>
                
            </div><br />
        </center>

    )

}
export default UserInfo;