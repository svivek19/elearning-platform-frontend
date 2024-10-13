import React from "react";
import UserTable from "../../components/users/UserTable";

const ManageUsers = () => {
  return (
    <div>
      <div>
        <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
          Manage Users
        </h1>
        <p className="max-sm:text-base text-lg text-gray-700">
          You can remove user accounts. Select one to continue.
        </p>
      </div>

      <UserTable />
    </div>
  );
};

export default ManageUsers;
