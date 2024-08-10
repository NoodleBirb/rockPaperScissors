import './App.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Confetti from 'react-confetti';

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
  const [robotChoice, setRobotChoice] = useState('null');

  const [showConfetti, setShowConfetti] = useState(false);

  const [wins, setWins] = useState(0);

  const playerChose = (event) => {

    let choice1 = event.currentTarget.value;

    setPlaying(true);
    if (choice1 == 'Rock') {
      setSelectedChoice(rock);
    }
    else if (choice1 == 'Paper') {
      setSelectedChoice(paper);
    }
    else {
      setSelectedChoice(scissors);
    }

    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
      setRobotChoice(paper);
    }
    else if (choice == 1) {
      setRobotChoice(rock);
    }
    else {
      setRobotChoice(scissors);
    }

    checkWin(choice1, choice);

  }

  const checkWin = (selectedChoice, robotChoice) => {
    if ((selectedChoice.toLowerCase() == 'rock' && robotChoice == 2) || (selectedChoice.toLowerCase() == 'scissors' && robotChoice == 0) || (selectedChoice.toLowerCase() == 'paper' && robotChoice == 1)) {
      setWins(wins + 1);
      setShowConfetti(true);
    }
    
  }

  useEffect(() => {
    if(showConfetti) {
       const Timer = setTimeout(() => {
        setShowConfetti(false)}, 1500);
      return () => clearTimeout(Timer);
    }
  }, [showConfetti]);

  return (
    <>
      <Container fluid>
        {showConfetti && <Confetti/>}
        <Row style={{height: '30%'}}>
          <Col md='3' className="test"></Col>
          <Col className="test d-flex justify-content-center title" md='6'>
          Welcome to ROCK PAPER SCISSORS SIMULATOR
          </Col>
          <Col className="test d-flex justify-content-center title" md='3'>
          Score: {wins}
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
            <Image src={playing ? robotChoice : robot} fluid/>
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
