import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ExecutiveSearch from "./pages/Solutions/RecruitmentStaffing/RecruitmentServices/ExecutiveSearch";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/executive-search-firm" element={<ExecutiveSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
