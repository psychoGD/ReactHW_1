import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import NavbarComponent from './navbarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col} from 'reactstrap';

function App() {
  return (
    <div className="App" style={{overflowY:'hidden',overflowX:'hidden'}}>
      <Row>
      <Col xl='2'>
        <Sidebar></Sidebar>
        </Col>
        <Col>
        <Col>
        <Row>

        <NavbarComponent></NavbarComponent>
        </Row>
        <Row>
        </Row>
        </Col>
        </Col>
      </Row>
    </div>
  );
}

export default App;
