import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div className="max-sm:p-2 p-4 text-xl ">
          Welcome to e-learning platform!
        </div>
      </div>
    </div>
  );
};

export default App;
