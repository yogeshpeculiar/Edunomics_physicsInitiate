import React from 'react';
import NavigationBar from './Components/NavBar';
import SideContentNavBar from './Components/SideContentNavBar';
import './App.css';
import {Container,Col,Row,Card} from 'react-bootstrap';

function App() {
  return (
    <div>
      <NavigationBar title="Welcome to Edunomics"></NavigationBar>
    
    <Container fluid>
     
       <Row >
        
         <Col xs={3} style={{backgroundColor:'grey'}}>
            <SideContentNavBar></SideContentNavBar>
         </Col>
         <Col>
            <Row xs={8} style={{backgroundColor:'#619396'}}>
              <div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </div>
            </Row>
            <Row>
              <Col>
                <Card style={{marginLeft:'10px',marginTop:'10px',borderColor:'black',borderRadius:'15px'}}>
                <Card.Body>
                  <Card.Title>Topics Covered</Card.Title>
                  <Card.Text>
                    <br/> <br/><br/> <br/>
                  </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{marginLeft:'10px',marginTop:'10px',borderColor:'black',borderRadius:'15px'}}>
                <Card.Body>
                  <Card.Title>Recent Activities </Card.Title>
                  <Card.Text>
                    <br/> <br/><br/> <br/>
                  </Card.Text>
                  </Card.Body>
                </Card>
                </Col>

            </Row>
         </Col>

         
       </Row>
      
      
    </Container>
    
   </div>
  );
}

export default App;
