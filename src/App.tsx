import Button from "./Components/Button";
import Container from "./Components/Container";

function App() {
  return (
    <main>
      <Container as={Button} onClick={}>
        Click Me
      </Container>
    </main>
  );
}

export default App;
