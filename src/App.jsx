import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

// image imports
import VS from './assets/images/VS.png';
import chooseFighter from './assets/images/choosefighter.jpg';
import rock from './assets/images/rock.png';
import paper from './assets/images/paper.png';
import scissors from './assets/images/scissors.png';
import robot from './assets/images/robot.png';

function App() {

  const [selectedChoice, setSelectedChoice] = useState('null');

  const [playing, setPlaying] = useState(false);

  const playerChose = (event) => {

    let choice = event.currentTarget.value;

    console.log("the player is picking their fighter!");
    console.log(playing);
    setPlaying(true);
    console.log(playing);
    console.log(choice)
    if (choice == 'Rock') {
      setSelectedChoice(rock);
    }
    else if (choice == 'Paper') {
      setSelectedChoice(paper);
    }
    else {
      setSelectedChoice(scissors);
    }
    console.log(selectedChoice)
  }

  const robotChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
      return paper;
    }
    else if (choice == 1) {
      return rock;
    }
    else {
      return scissors;
    }
  }

  return (
    <>
      <Container fluid>
        
        <Row style={{height: '30%'}}>
          <Col className="test d-flex justify-content-center title">
          Welcome to ROCK PAPER SCISSORS SIMULATOR
          </Col>
        </Row>

        <Row style={{height: '30%'}}>
          <Col className="test" md='3'></Col>
          <Col
            className="test d-flex justify-content-center align-items-center" 
            md='2'
          >
            <Button onClick={playerChose} variant="danger" size='lg' className="w-100" value='Rock'>
              Rock
            </Button>
          </Col>
          <Col
            className="test d-flex justify-content-center align-items-center" 
            md='2'
          >
            <Button onClick={playerChose} variant="danger" size='lg' className="w-100" value="Paper">
              Paper
            </Button>
          </Col>
          <Col
            className="test d-flex justify-content-center align-items-center" 
            md='2'
          >
            <Button onClick={playerChose} variant="danger" size='lg' className="w-100" value='Scissors'>
              Scissors
            </Button>
          </Col>
          <Col className="test" md='3'></Col>
        </Row>

        <Row style={{height: '30%'}}>
          <Col className="test"></Col>
          
          <Col
            className="test d-flex justify-content-center align-items-center" 
          >
            <Image src={playing ? selectedChoice : chooseFighter} fluid/>
          </Col>

          <Col className="test"></Col>

          <Col
            className="test d-flex justify-content-center align-items-center" 
          >
            <Image src={VS} fluid/>
          </Col>

          <Col className="test"></Col>

          <Col
            className="test d-flex justify-content-center align-items-center" 
          >
            <Image src={playing ? robotChoice() : robot} fluid/>
          </Col>

          <Col className="test"></Col>
        </Row>

        <Row style={{height: '10%'}}>
          <Col className="test"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
