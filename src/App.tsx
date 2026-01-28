import { useRef } from "react";
import Input from "./Components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}

export default App;
