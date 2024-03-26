import "./App.css";
import { Route, Routes } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import TargetImage from "./pages/TargetImage";
import UploadImage from "./pages/UploadImage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:postId" element={<TargetImage />} />
        <Route path="/upload" element={<UploadImage />} />
      </Routes>
    </>
  );
}

export default App;
