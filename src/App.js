import { FirstForm } from "./FirstForm";
import { Routes, Route } from "react-router-dom";
import { SecondForm } from "./SecondForm";
import { ThirdForm } from "./ThirdForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstForm />}></Route>
        <Route path="/second" element={<SecondForm />}></Route>
        <Route path="/third" element={<ThirdForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
