import './App.css';
import {Container} from "react-bootstrap";
import ResponsiveCenteredImageDescription from "./component/FrontPage";

function App() {
  return (
      <Container>
        <h1 className="text-center mt-3">Pokkoa.com</h1>
        <ResponsiveCenteredImageDescription />
      </Container>
  );
}

export default App;
