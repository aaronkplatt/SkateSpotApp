import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Homepage/Homepage"
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';

function App() {
  //giving the application time to render the login stuff, (2 lines below)
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <div className="fullscreen-container center-align">
        {/* <NavBar /> */}
        <div class="navbar">
          <h1>LOGO</h1>
          <LoginButton />
          <LogoutButton />
        </div>
        <Profile />
        {/* <HomePage /> */}


      </div>
    </div>
  );
}
export default App;
