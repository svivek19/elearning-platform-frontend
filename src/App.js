import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Course from "./pages/courses/Course";

const App = () => {
  return (
    <Router>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="max-sm:p-2 p-4 text-xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Course />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
