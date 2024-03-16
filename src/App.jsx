import { Route, Routes } from "react-router-dom";
import AMNavbar from "./AMNavbar";
import "./App.css";
import FrontEnd from "./Screens/FrontEnd";
import Backend from "./Screens/Backend";
// import AMTimeline from "./components/AMTimeline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AMNavbar />} />
        <Route path="/backend" element={<Backend />} />
        {/* <Route path="/timeline" element={<AMTimeline />} /> */}
        <Route path="/frontend" element={<FrontEnd />} />
      </Routes>
    </>
  );
}

export default App;
