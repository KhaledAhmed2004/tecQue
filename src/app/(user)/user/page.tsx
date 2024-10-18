"use client";
import Followers from "@/components/Followers";
import Following from "@/components/Following";
import ProfileInfo from "@/components/ProfileInfo";
import { useMe } from "@/hooks/auth/useMe";
import React from "react";
import { FaSpinner } from "react-icons/fa";

const UserDashboard = () => {
  const { user, isLoading } = useMe();
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <FaSpinner className="animate-spin" size={40} />
      </div>
    );

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="col-span-2 space-y-6">
          <ProfileInfo user={user} />
        </div>

        {/* Second Column */}
        <div className="col-span-1 space-y-6">
          <Followers followers={user?.followers} />
          <Following following={user?.following} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
