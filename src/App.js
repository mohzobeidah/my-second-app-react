import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./navbar/navbar";
import Link from "./link/link";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./user/user"; // Import the User component
import Button from "./button/button";
import UserFunction from "./user/userFunction";
import AddUser from "./user/addUser";
function App() {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Navbar1 />
      <Link name="Home" href="ggggggg" />
      <Link name="About" href="ggggggg" />
      <Link name="Contact Us" href="ggggggg" />
      <input type="text"></input>
      <UserFunction isPass={true} />
      <div className="container P-5" >
      <AddUser />
      </div>
      <Button />
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
    </>
  );
}

export default App;
