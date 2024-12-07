import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurPresence from "./components/OurPresence/OurPresence";



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/ourpresence" element={<OurPresence />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
