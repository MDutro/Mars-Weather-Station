import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ZipCode = props => {
  return (
    <Container>
      <Form onSubmit={props.onFormSubmit} style={{paddingTop: '1.0rem', width: '25vw'}}>
        <Form.Group>
          <Form.Label>Find Local Weather</Form.Label>
          <Form.Control type="text" 
            value={props.zip} 
            onChange={props.handleChange} 
            maxLength="5" 
            placeholder="Enter Zip Code" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>       
  ); 
}

export default ZipCode
  






