import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="pt-5 text-2xl">{count}</h1>
      <Button className="pt-2" onClick={() => setCount(count + 1)}>
        Count
      </Button>
    </div>
  );
}

export default App;
