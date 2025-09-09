import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Alp Consulting. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
