import { Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./assets/App.css";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <Container>
      <MainRouter />
    </Container>
  );
}

export default App;
