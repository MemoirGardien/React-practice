import React from 'react';
import './App.css';
import Cow from "./images/cow.gif"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Body>
            <Card.Img />
            <Card.Title style={{color: "red"}}>Shinano</Card.Title>
          </Card.Body>
        </Card>

        <Alert variant="primary">this is a Cow</Alert>
        <Button className="btn btn-light">click me</Button>
        <Breadcrumb>
          <BreadcrumbItem>test 1</BreadcrumbItem>
          <BreadcrumbItem>test 2</BreadcrumbItem>
          <BreadcrumbItem active>test 3</BreadcrumbItem>
        </Breadcrumb>
      </header>
    </div>
  );
}

export default App;
