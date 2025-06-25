"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Verified Artist Profiles",
  "Instant Booking Requests",
  "Transparent Fee Ranges",
  "Multi-Language Support",
  "Responsive Mobile Experience",
  "Easy Artist Onboarding",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureSection() {
  return (
    <motion.section
      className="text-gray-600 body-font"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Features
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            From booking top-tier talent to simplifying artist management, Artistly offers a seamless experience for event planners and managers alike.
          </p>
        </motion.div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-2 sm:w-1/2 w-full"
              variants={itemVariants}
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">{feature}</span>
              </div>
            </motion.div>
          ))}
        </div>
          <Link href="/artist" className=" flex p-4 justify-center">
          <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-10 rounded hover:bg-blue-700 transition">
            Explore Artists<ArrowRight className="mt-1 ml-2 h-4 w-4 justify-center" />
          </button>
        </Link>
      </div>
    </motion.section>
  );
}
