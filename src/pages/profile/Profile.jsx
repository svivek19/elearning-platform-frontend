import React from "react";
import ProfileUserInfo from "../../components/profile/ProfileUserInfo";

const Profile = () => {
  return (
    <div>
      <h1 className="max-sm:text-xl text-2xl font-medium text-teal-700 mb-4">
        Account Management
      </h1>

      <div>
        <ProfileUserInfo />
      </div>
    </div>
  );
};

export default Profile;
