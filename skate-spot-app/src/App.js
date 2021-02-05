import './App.css';

//Auth0
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

//Pages
import HomePage from "./pages/Homepage/Homepage"
import MyAccount from './pages/MyAccount/MyAccount';

// bootstrap ($, Popper = needed for dropdown)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

//router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Protected routes
const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

function App() {
  //giving the application time to render the login stuff, (2 lines below)
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
      <div className="App">
          {/* NAVBAR */}
          <nav className="navbar">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bars"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item">
                  <Link to="/Homepage">Home</Link>
                </button>
                <button className="dropdown-item">
                  <Link to="/MyAccount">My Account</Link> 
                </button> 
              </div>
            </div>
          </nav>
          <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Homepage" component={HomePage} />
                <ProtectedRoute exact path="/MyAccount" component={MyAccount} />
                <Route path="*" component={HomePage}/>
          </Switch>

      </div>
    </Router>
  );
}
export default App;
