import React, { useEffect, useState } from "react";
import Cards from "../../components/dashboard/Cards";
import UserTable from "../../components/dashboard/UserTable";
import AxiosInstance from "../../utils/AxiosInstance";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await AxiosInstance.get("/user/get");
        setData(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

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
        <Cards data={data} />
      </div>

      <div>
        <UserTable data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
