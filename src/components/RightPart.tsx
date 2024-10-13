"use client";
import { useMe } from "@/hooks/auth/useMe";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

const RightPart = () => {
  const { user, isLoading } = useMe();
  if (isLoading) return <Spinner />;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex xl:flex-row flex-col justify-start items-center space-x-2 gap-3">
      <div className="relative border border-primary-blue p-1 rounded-full cursor-pointer">
        <Image
          src={user?.profilePic}
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover"
          width={56}
          height={56}
        />
        {user?.isVerified && (
          <FaCheckCircle className="absolute top-1 left-12 text-[#128ef2] text-xl" />
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Hello, {user?.name}</h2>
        </div>
        <Button
          className="text-sm w-full"
          href={user?.role === "admin" ? "/dashboard/admin" : "/dashboard/user"}
        >
          Go to {user?.role === "admin" ? "Dashboard" : "My Profile"}
        </Button>
        <Link href={"/new-post"} passHref>
          <div className="flex items-center justify-center space-x-2 bg-blue-600 text-white hover:bg-blue-500 transition duration-300 rounded-lg p-2 cursor-pointer shadow-md">
            <FaPlusCircle className="text-lg" />
            <span className="font-semibold">Create New Post</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightPart;
