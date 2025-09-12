import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main className="flex-1 pt-20">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
