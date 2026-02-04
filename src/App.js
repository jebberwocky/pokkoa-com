import './App.css';
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResponsiveCenteredImageDescription from "./component/FrontPage";
import PostPage from "./component/PostPage";

function App() {
  return (
      <Router>
          <Container fluid className="d-flex flex-column min-vh-100 p-0">
              <Navbar bg="light" expand="md" className="shadow-sm">
                  <Container>
                      <Navbar.Brand as={Link} to="/">
                          <Image src="/logo.jpg" alt="Pokkoa Logo" height={40} rounded className="me-2" />
                          Pokkoa AI
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ms-auto">
                              <NavDropdown title="Outlook" id="outlook-dropdown">
                                  <NavDropdown.Item as={Link} to="/post/outlook/2026">
                                      2026
                                  </NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown title="Report" id="outlook-dropdown">
                                  <NavDropdown.Item as={Link} to="/post/outlook/2026">
                                      🔮 Big Data Reveals: What Are We Really Asking?
                                  </NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
                      </Navbar.Collapse>

                  </Container>
              </Navbar>

              <Routes>
                  <Route path="/" element={<ResponsiveCenteredImageDescription />} />
                  <Route path="/post/:category/:year" element={<PostPage />} />
              </Routes>
          </Container>
      </Router>
  );
}

export default App;
