"use client";
import { useMe } from "@/hooks/auth/useMe";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

const RightPart = () => {
  const { user } = useMe();

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl flex xl:flex-row flex-col justify-start items-center space-x-2 gap-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:shadow-2xl dark:hover:shadow-2xl">
      {/* User Profile Section */}
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <Image
            src={user?.profilePic}
            alt="avatar"
            className="rounded-full object-cover ring-2 ring-blue-500 hover:ring-blue-700 transition duration-300 ease-in-out"
            fill
          />
        </div>
        <h2 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">
          {user?.name || "Guest"}
        </h2>
        <p className="text-gray-400 text-sm mt-1 dark:text-gray-300">
          Lover of cars and tech
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col gap-2">
        <Button
          className="text-sm h-12 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
          href={user?.role === "admin" ? "/dashboard/admin" : "/dashboard/user"}
        >
          Go to {user?.role === "admin" ? "Dashboard" : "My Profile"}
        </Button>
        <Link href={"/new-post"} passHref>
          <div className="flex h-12 items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white transition-transform transform hover:scale-105 duration-300 rounded-lg p-3 cursor-pointer shadow-lg dark:bg-green-500 dark:hover:bg-green-600">
            <FaPlusCircle className="text-lg" />
            <span className="font-semibold">Create New Post</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightPart;
