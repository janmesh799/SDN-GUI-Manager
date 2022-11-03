import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Switches from './Components/Switches/Switches.jsx';
import FlowTable from './Components/Flowtable/FlowTable.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Switches />}></Route>
        <Route path="/flowtable" element={<FlowTable />}></Route>
      </Routes>
    </Router>
  );
}

export default App;