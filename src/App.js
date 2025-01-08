import logo from './logo.svg';
import './App.css';
import Navbar1 from './navbar/navbar';
import Link from './link/link';
import {Nav} from'react-bootstrap'
import User from './user/user'; // Import the User component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar1 />
        <Link name="Home" href="ggggggg"/>
        <Link name="About" href="ggggggg"/>
        <Link name="Contact Us" href="ggggggg"/>
      <input type='text'></input>
      

      <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
    <User /> {/* Add the User component */}
    </header>
    </div>
  );
}

export default App;
