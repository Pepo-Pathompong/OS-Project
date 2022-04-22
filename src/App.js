import  Nav  from 'react-bootstrap/Nav';
import  NavBar  from 'react-bootstrap/NavBar';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom';

import CreateStock from './components/create-stock.component';
import EditStock from './components/edit-stock.component';
import StockList from './components/stock-list.component';

function App() {
  return (
    <Router>
      <div className='App'>
        

          <NavBar bg = "dark" variant = "dark">
            <Container>
              
                <NavBar.Brand>
                  <Link to = {"/create-stock"} class = "nav-link" >
                      Inventory System 
                    </Link>
                </NavBar.Brand>
                  <Nav className= "justify-content-end" >
                      <Nav>
                        <Link to = {"/create-stock"} class = "nav-link">
                            Create Stock
                        </Link>
                      </Nav>

                      <Nav>
                        <Link to = {"/stock-list"} class = "nav-link">
                            Stock List
                        </Link>
                      </Nav>
                  </Nav>
            </Container>

          </NavBar>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path = "/"  component = {CreateStock} />
                  <Route  path = "/create-stock"  component = {CreateStock} />
                  <Route  path = "/edit-stock/:id"  component = {EditStock} />
                  <Route  path = "/stock-list"  component = {StockList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Router>
  );
}

export default App;
