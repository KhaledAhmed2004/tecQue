"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRocket, FaTools, FaUsers } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const cardHover = {
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" },
};

const AboutPage = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="container mx-auto px-4 py-6 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4 text-primary-text"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            About TechTalk
          </motion.h1>
          <motion.p
            className="text-xl text-secondary-text"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering Tech Enthusiasts Worldwide
          </motion.p>
        </div>

        <main className="container mx-auto px-4 py-5">
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-primary-text mb-6"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="text-lg text-secondary-text mb-8"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At{" "}
                <span className="text-primary-blue font-semibold">tacQue</span>,
                we believe in more than just providing services—we believe in
                creating memorable experiences. Our journey started with a
                simple vision: to redefine the way you connect with technology,
                making it fast, reliable, and accessible for everyone.
              </motion.p>
              <motion.p
                className="text-lg text-secondary-text mb-8"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                From our humble beginnings, we’ve grown into a team that’s
                dedicated to innovation and excellence. With every project, we
                strive to deliver more than just solutions—we deliver a promise
                of quality, trust, and a passion for pushing boundaries. At the
                heart of{" "}
                <span className="text-primary-blue font-semibold">tacQue</span>,
                it’s always been about you and your success.
              </motion.p>
              <motion.p
                className="text-lg text-secondary-text mb-10"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 1 }}
              >
                Join us on this journey, as we continue to create a community
                where technology is not just a tool, but a gateway to endless
                possibilities.
              </motion.p>
            </div>
          </section>
        </main>
      </div>
      <section className="container mx-auto px-4 py-10">
        <motion.h2
          className="text-3xl font-bold text-center text-primary-text mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1.2 }} // Add animation to the heading
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <FaRocket className="w-12 h-12 text-primary-blue mb-4 mx-auto" />
              ),
              title: "Fast & Reliable",
              description:
                "Experience the speed and reliability you need to stay ahead in the tech world. Our services are designed for seamless and efficient performance.",
            },
            {
              icon: (
                <FaUsers className="w-12 h-12 text-primary-blue mb-4 mx-auto" />
              ),
              title: "Community Support",
              description:
                "Join a thriving community of tech enthusiasts. Share insights and seek help from like-minded individuals to enhance your skills.",
            },
            {
              icon: (
                <FaTools className="w-12 h-12 text-primary-blue mb-4 mx-auto" />
              ),
              title: "Hands-On Tools",
              description:
                "Access a variety of tools and resources to troubleshoot and resolve your tech challenges. We equip you with the right tools for success.",
            },
            {
              icon: (
                <FaGraduationCap className="w-12 h-12 text-primary-blue mb-4 mx-auto" />
              ),
              title: "Learning Resources",
              description:
                "Explore tutorials, articles, and guides to expand your knowledge and stay updated on the latest trends in technology.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2 hover:shadow-lg max-w-sm"
              whileHover="hover"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }} // Adjust delay based on index for staggered effect
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-center text-primary-text mb-2">
                {card.title}
              </h3>
              <p className="text-secondary-text text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Join Our Engineering Community
        </motion.h2>
        <motion.p
          className="mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Ready to enhance your engineering knowledge and connect with
          like-minded enthusiasts?
        </motion.p>
        <Link passHref href="/sign-in">
          <motion.div
            className="inline-block"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 1.8 }} // Entrance animation for the button
          >
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-xl shadow-md transition duration-300 font-semibold">
              Sign Up Now
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
