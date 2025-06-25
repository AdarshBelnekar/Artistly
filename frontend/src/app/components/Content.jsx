"use client";

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={cardVariants}
          className="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Why Choose Artistly?
          </h2>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Discover the features that make Artistly the best platform for
            booking top talent for your next event.
          </p>
        </motion.div>

        <div className="flex flex-wrap -m-4">
          {[
            "Shooting Stars",
            "The Catalyzer",
            "Neptune",
            "Melanchole",
            "Bunker",
            "Ramona Falls",
          ].map((title, index) => (
            <motion.div
              key={title}
              className="xl:w-1/3 md:w-1/2 p-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {title}
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm-to-table.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Content;
