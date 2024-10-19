"use client";
import PostTable from "@/components/PostTable";
import ProfileInfo from "@/components/ProfileInfo";
import SearchFilter from "@/components/SearchFilter";
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
      <div className="col-span-2 space-y-6">
        <ProfileInfo user={user} />
      </div>
      <section className="py-3 px-4 lg:py-5 lg:px-0 max-w-8xl mx-auto">
        <div className="space-y-4">
          <SearchFilter />
          <div className="overflow-x-auto">
            <PostTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
