import { Route, Routes } from "react-router-dom";
import AMNavbar from "./AMNavbar";
import "./App.css";
import ServiceDetail from "./Screens/ServiceDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AMNavbar />} />
        <Route path="/serviceDetails" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;
