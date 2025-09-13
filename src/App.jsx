import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ExecutiveSearch from "./pages/Solutions/RecruitmentStaffing/RecruitmentServices/ExecutiveSearch";
import ContingentSearch from "./pages/Solutions/RecruitmentStaffing/RecruitmentServices/ContingentSearch";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/executive-search-firm" element={<ExecutiveSearch />} />
          <Route path="/contingent-search" element={<ContingentSearch/>}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/overview" element={<Overview />}/>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
