import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class WeatherResults extends React.Component {





  render() {
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
    )
  }
}

export default WeatherResults