import React from 'react';
import {Card,Container,Col,Row} from 'react-bootstrap';
const Support =(props) =>{
    
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.shorttutorials.com/missed-call-bank-balance-enquiry/images/allahabad-bank-balance-enquiry.png" />
  <Card.Body>
    <Card.Title>Toll Free Numbers for Loan</Card.Title>
    <Card.Text>
     Willing to start a business, facing financial problems for education or something.Contact us from the above numbers.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://www.shorttutorials.com/allahabad-bank-sms-banking/images/allahabad-bank-primary-a-c-cheque-status.png" />
  <Card.Body>
    <Card.Title>Customer Care Numbers</Card.Title>
    <Card.Text>
     Having any issues facing with our ABC Online bank app or want to check the primary account status ,contact us .
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://www.paisabazaar.com/wp-content/uploads/2018/03/Allahabad-bank-1.jpg" />
  <Card.Body>
    <Card.Title>Toll Free Numbers</Card.Title>
    {/* <Card.Text>
     For Mini statement or  any issues dial for the numbers shown above in the image.
    </Card.Text> */}
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
            </div>
        )
    }

export default Support;