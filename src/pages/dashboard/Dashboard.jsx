import React from "react";
import Cards from "../../components/dashboard/Cards";

const Dashboard = () => {
  // get user details from local storage
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log();

  return (
    <div>
      <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
        Welcome to VCode
      </h1>
      <p className="max-sm:text-base text-lg text-gray-700">
        Your journey to mastering coding starts here! Explore courses, build
        projects, and achieve your goals.
      </p>

      <div>
        {user?.fullName ? (
          <Cards />
        ) : (
          <div className="flex justify-center items-center h-[60vh] text-red-500 font-semibold">
            <h1>Please register or log in to start exploring.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
