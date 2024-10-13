"use client";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; // Importing React Icons

const page = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormVisible(false); // Hide form after submission
  };

  // Show the form with a fade-in effect
  useEffect(() => {
    setFormVisible(true);
  }, []);

  return (
    <>
      <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-background py-8 lg:py-10 mx-auto">
        <div className="h-full">
          <p className="mt-3 mb-12 text-lg text-primary-text dark:text-gray-200">
            Have questions or need help? Our team is here to assist you.
          </p>
          <ul className="mb-6 md:mb-0">
            {/* Contact Info Items */}
            <li className="flex mb-4 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue bg-blue-500 text-gray-50 transition ease-in duration-300">
                <FaMapMarkerAlt className="h-6 w-6" /> {/* Map Icon */}
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text dark:text-gray-200">
                  Our Office
                </h3>
                <p className="text-secondary-text dark:text-gray-400">
                  123 React Lane
                </p>
                <p className="text-secondary-text dark:text-gray-400">
                  Feni, Bangladesh
                </p>
              </div>
            </li>
            <li className="flex mb-4 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue bg-blue-500 text-gray-50 transition ease-in duration-300">
                <FaPhone className="h-6 w-6" /> {/* Phone Icon */}
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text dark:text-gray-200">
                  Get in Touch
                </h3>
                <p className="text-secondary-text dark:text-gray-400">
                  Phone: +880 123 456 789
                </p>
                <p className="text-secondary-text dark:text-gray-400">
                  Email: support@drivenow.com
                </p>
              </div>
            </li>
            <li className="flex mb-4 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue bg-blue-500 text-gray-50 transition ease-in duration-300">
                <FaClock className="h-6 w-6" /> {/* Clock Icon */}
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text dark:text-gray-200">
                  Office Hours
                </h3>
                <p className="text-secondary-text dark:text-gray-400">
                  Monday - Friday: 09:00 - 18:00
                </p>
                <p className="text-secondary-text dark:text-gray-400">
                  Saturday: 10:00 - 14:00
                </p>
                <p className="text-secondary-text dark:text-gray-400">
                  Closed on Sundays
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={`w-full p-6 lg:p-8 shadow-lg rounded-xl bg-secondary-background transition-opacity duration-700 ${
            isFormVisible ? "opacity-100" : "opacity-0"
          }`}
          id="form"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 text-primary-text">
            Reach Out to Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full mb-0.5 rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                    name="name"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full mb-0.5 rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                    name="email"
                  />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="textarea"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <textarea
                  id="textarea"
                  name="message"
                  cols={30}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full mb-0.5 border-secondary-grey rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <Button className="w-full hover:bg-blue-700 transition duration-300">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto mt-10 mb-8 p-4">
        <h2 className="text-2xl font-semibold text-center mb-4 text-primary-text">
          Find Us Here
        </h2>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5475569046163!2d91.56612031522268!3d23.00042958470349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad3aef88f47c3f%3A0x575d0a348b2a5944!2sFeni%20District%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1694829300827!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map of Feni"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
