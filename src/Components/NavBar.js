import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(props){
    return(
        <Navbar expand="lg">
             <Navbar.Brand>{props.title}</Navbar.Brand>
            
             

             <NavDropdown title="Select Class" style={{background:'white',borderRadius:'25px',color:'white',borderColor:'black'}} >
        
        
            <NavDropdown title="11 th" id="selectClass">
                
                        <NavDropdown title="Physics" id="selectClass">
                            <NavDropdown.Item href="#">Electric Charges and Fields</NavDropdown.Item>  
                            <NavDropdown.Item href="#">Electostatic Potential</NavDropdown.Item>   
                            <NavDropdown.Item href="#">Moving charges and magnetism</NavDropdown.Item>   
                            <NavDropdown.Item href="#">Electromagnetic Induction</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Alternating Current</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Electromagnetic waves</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Raw optics</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Wave optics</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Dual nature of Radiation</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Atoms</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Nuclei</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Communication System</NavDropdown.Item> 
                        </NavDropdown>
                        <NavDropdown title="Maths" id="selectClass">
                            <NavDropdown.Item href="#"></NavDropdown.Item>       
                        </NavDropdown>
                

            </NavDropdown>
        
        <NavDropdown.Divider />
        <NavDropdown title="12 th" id="selectClass">
            
            <NavDropdown title="Physics" id="selectClass">
            <NavDropdown.Item href="#">Electric Charges and Fields</NavDropdown.Item>  
                <NavDropdown.Item href="#">Electostatic Potential</NavDropdown.Item>   
                <NavDropdown.Item href="#">Moving charges and magnetism</NavDropdown.Item>   
                <NavDropdown.Item href="#">Electromagnetic Induction</NavDropdown.Item> 
                <NavDropdown.Item href="#">Alternating Current</NavDropdown.Item> 
                <NavDropdown.Item href="#">Electromagnetic waves</NavDropdown.Item> 
                <NavDropdown.Item href="#">Raw optics</NavDropdown.Item> 
                <NavDropdown.Item href="#">Wave optics</NavDropdown.Item> 
                <NavDropdown.Item href="#">Dual nature of Radiation</NavDropdown.Item> 
                <NavDropdown.Item href="#">Atoms</NavDropdown.Item> 
                <NavDropdown.Item href="#">Nuclei</NavDropdown.Item> 
                <NavDropdown.Item href="#">Communication System</NavDropdown.Item>        
            </NavDropdown>
            <NavDropdown title="Maths" id="selectClass">
                <NavDropdown.Item href="#"></NavDropdown.Item>       
            </NavDropdown>                         
        </NavDropdown>
      </NavDropdown>
      
      <Nav className="justify-content-end" style={{ width: "100%" }}>
             <Button variant="light" style={{borderRadius:'25px',background:'white',borderColor:'black'}} >My account</Button>
             </Nav>   
            
            
        </Navbar>

       
    );
}
export default NavigationBar;