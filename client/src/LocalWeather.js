import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class LocalWeather extends React.Component {
  state =  {localWeather : null};

  EnterZip = () => {
    return (
      <Container>
        <Form style={{paddingTop: '1.0rem', width: '25vw'}}>
          <Form.Group>
            <Form.Label>Find Local Weather</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
              
    );  
  }

  WeatherResults = () => {
    return (
      <Container>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Convert Temps</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  GetWeather = () => {
    const localWeather = this.state.localWeather;
    if (!localWeather) {
      return <this.EnterZip />
    }
    return <this.WeatherResults />
  }



  render() {
    return (
      <div>
        <this.GetWeather />
      </div>
    );
  }
}