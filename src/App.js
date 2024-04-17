import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import ExamplePage from "./pages/ExamplePage";
import TimerPage from "./pages/TimerPage";
import "./gobal.css";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="example" element={<ExamplePage />}></Route>
        <Route path="timer" element={<TimerPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
