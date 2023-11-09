import Canvas from "./canvas";
import Custermizer from "./pages/Custermizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Custermizer />
    </main>
  );
}

export default App;
