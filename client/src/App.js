import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import FlowTable from './Components/Flowtable/FlowTable.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flowtable" element={<FlowTable />}></Route>
      </Routes>
    </Router>
  );
}

export default App;