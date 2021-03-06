import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './MarsWeather.css'

const ZipCode = props => {
  return (
    <Container>
      <Form onSubmit={props.onFormSubmit}>
        <Form.Group>
          <Form.Label className="marsText" style={{fontSize: '1.5rem'}}>Find Local Weather</Form.Label>
          <Form.Control type="text" 
            value={props.zip} 
            onChange={props.handleChange} 
            maxLength="5" 
            placeholder="Enter Zip Code"
            style={{backgroundColor: 'black', border: 'solid 2px #47D1F7', color: '#47D1F7', fontSize: '1.5rem'}} 
          />
        </Form.Group>
        <button className="button" variant="primary" type="submit">Submit</button>
      </Form>
    </Container>       
  ); 
}

export default ZipCode
  







