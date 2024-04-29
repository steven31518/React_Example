import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ExamplePage from "./pages/ExamplePage";
import ExampleDetailPage from "./pages/ExampleDetailPage";
import ContextExamplePage from "./pages/ContextExamplePage";
import TimerPage from "./pages/TimerPage";
import ExampleSearchParams from "./pages/ExampleSearchParams";
import OriginForm from "./components/OriginForm";
import axios from "axios";
import "./gobal.css";

function App() {
  //useParams
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="example" element={<ContextExamplePage />} />
        <Route path="detail/:id" element={<ExampleDetailPage />} /> 
        <Route path="timer" element={<TimerPage />} />
        <Route path="form" element={<OriginForm/>}/>
      </Route>
    </Routes>
  );
}

export default App;
