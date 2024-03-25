import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

//import pages
import Main from "./pages/Main";
import TargetImage from "./pages/TargetImage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TargetImage />} />
      </Routes>
    </>
  );
}

export default App;
