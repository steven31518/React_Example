import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Section from "./components/Section";
import Count from "./components/Count";
import ExamplePage from "./pages/ExamplePage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="admin" element={<ExamplePage />}></Route>
        <Route path="about" element={<Count />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
