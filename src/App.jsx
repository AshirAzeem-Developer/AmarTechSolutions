import { Route, Routes } from "react-router-dom";
import AMNavbar from "./AMNavbar";
import "./App.css";
import ServiceDetail from "./Screens/ServiceDetail";
import FrontEnd from "./Screens/FrontEnd";
// import AMTimeline from "./components/AMTimeline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AMNavbar />} />
        <Route path="/serviceDetails" element={<ServiceDetail />} />
        {/* <Route path="/timeline" element={<AMTimeline />} /> */}
        <Route path="/Frontend" element={<FrontEnd />} />

      </Routes>
    </>
  );
}

export default App;
