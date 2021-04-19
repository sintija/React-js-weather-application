import Illustration from "./illustration";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Row className="main-content">
        <Col xs={12} s={12} md={7}>
          <Illustration />
        </Col>
        <Col xs={12} s={12} md={5}>
          <Weather defaultCity="London" />
          <Forecast />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;

