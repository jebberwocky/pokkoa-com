import './App.css';
import {Container, Image, Navbar} from "react-bootstrap";
import ResponsiveCenteredImageDescription from "./component/FrontPage";

function App() {
  return (
      <Container  fluid className="d-flex flex-column min-vh-100 p-0">
          <Navbar bg="light" expand="md" className="shadow-sm">
              <Container>
                  <Navbar.Brand href="/">
                      <Image src="/logo.jpg" alt="Pokkoa Logo" height={40} rounded className="me-2" />
                      Pokkoa AI
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">

                  </Navbar.Collapse>
              </Container>
          </Navbar>
        <ResponsiveCenteredImageDescription />
      </Container>
  );
}

export default App;
