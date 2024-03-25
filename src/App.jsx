import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

//import pages
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
