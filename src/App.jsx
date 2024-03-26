import "./App.css";
import { Route, Routes } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import TargetImage from "./pages/TargetImage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:postId" element={<TargetImage />} />
      </Routes>
    </>
  );
}

export default App;
