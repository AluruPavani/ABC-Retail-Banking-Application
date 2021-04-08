import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Not Found';
import Register from './Register';
import Dashboard from './pages/Dashboard';
import UserDataEdit from './pages/UserDataEdit';
import { Home } from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import About from './pages/About';
import Support from './pages/Support';
import AddUser from './pages/AddUser';
import UserLogin from './pages/UserLogin';
import UserView from './pages/UserView';
import UserInfo from './pages/UserInfo';
import Withdraw from './pages/Withdraw';
import CurrentWithdrawlAmount from './pages/CurrentWithdrawlAmount';
import Deposit from './pages/Deposit';
import CurrentAmount from './pages/CurrentAmount';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="light">
          <Nav className="mr-auto">

            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/register">Sign Up</Link></Nav.Link>
            <NavDropdown title="Sign In" id="collasible-nav-dropdown" bg="dark" variant="light">
              <NavDropdown.Item><Link to="/userLogin">User SignIn</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/adminLogin">Admin SignIn</Link></NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link  ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link  ><Link to="/support">Support</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>

          <Route path="/about" component={About} />

          <Route exact path="/" component={Home} />
          <Route exact path="/logout"><Redirect to="/" /></Route>

          <Route path="/dashboard" component={Dashboard} />

          <Route path="/edit/:id" component={UserDataEdit} />

          <Route path="/view/:id" component={UserView} />

          <Route path="/userinfo/:id" component={UserInfo} />

          <Route path="/adduser" exact component={AddUser} />
          
          <Route path="/deposit" component={Deposit}></Route>
          <Route path="/currentadd" component={CurrentAmount}></Route>
          <Route path="/withdraw" component={Withdraw}></Route>

          <Route path="/currentsub" component={CurrentWithdrawlAmount}></Route>

          <Route path="/userLogin" exact component={UserLogin} >

          </Route>
          <Route path="/adminLogin" exact component={AdminLogin} >

          </Route>
          <Route path="/register" component={Register} />

          <Route path='/support' exact component={Support} />
          <Route path="***" component={NotFound} >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
