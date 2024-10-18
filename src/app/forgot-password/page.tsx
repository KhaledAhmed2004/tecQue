"use client";

import Button from "@/components/Button";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail } from "react-icons/fi";

interface IFormInput {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { forgotPassword, isPending } = useForgotPassword();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email }) => {
    forgotPassword(email);
  };

  return (
    <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-background py-8 lg:py-10 mx-auto">
      <div className="w-full p-6 lg:p-8  shadow-lg rounded-xl bg-secondary-background">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 text-primary-text">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                *{errors.email.message}
              </p>
            )}
          </div>
          <Button
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
            loading={isPending}
            disabled={isPending}
          >
            Submit
          </Button>

          <div className="flex justify-end items-center text-sm text-secondary-text font-medium">
            <label className="ml-2 block text-sm text-primary-text">
              Remembered your password?{" "}
              <a
                href="/sign-in"
                className="transition-all duration-300 font-semibold"
              >
                Sign In
              </a>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
