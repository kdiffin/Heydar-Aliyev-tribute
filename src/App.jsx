import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mukafatlar from "./components/Mukafatlar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Mukafatlar />
    </div>
  );
}

export default App;
