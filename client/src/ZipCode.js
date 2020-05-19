import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MarsWeather.css'

const ZipCode = props => {
  return (
    <Container>
      <Form onSubmit={props.onFormSubmit}>
        <Form.Group>
          <Form.Label className="marsText">Find Local Weather</Form.Label>
          <Form.Control type="text" 
            value={props.zip} 
            onChange={props.handleChange} 
            maxLength="5" 
            placeholder="Enter Zip Code"
            style={{backgroundColor: 'black', border: 'solid 2px #47D1F7', color: '#47D1F7'}} 
          />
        </Form.Group>
        <Button className="button" variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>       
  ); 
}

export default ZipCode
  







