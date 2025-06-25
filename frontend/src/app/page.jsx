"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import CategoryCard from "./components/CategoryCard";
import Content from "./components/Content";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import FeatureSection from "./components/FeatureSection";

// const categories = [
//   { title: "Singers", img: "/singer.jpg" },
//   { title: "Dancers", img: "/dancer.jpg" },
//   { title: "Speakers", img: "/speaker.jpg" },
//   { title: "DJs", img: "/dj.jpg" },
// ];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]">
  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />

  <motion.div
    className="relative container mx-auto flex px-5 md:flex-row flex-col items-center z-10"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        variants={fadeInUp}
      >
        Book Top Performing Artists Instantly
        <br className="hidden lg:inline-block" /> For Any Event
      </motion.h1>
      <motion.p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300" variants={fadeInUp}>
        Discover and connect with verified singers, dancers, DJs, and speakers — all in one place.
      </motion.p>
      <motion.div className="flex justify-center" variants={fadeInUp}>
        <Link href="/artist">
          <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 rounded hover:bg-blue-700 transition">
            Explore Artists
          </button>
        </Link>
        <Link href="/onboard">
          <button className="ml-4 inline-flex text-blue-700 bg-blue-100 border-0 py-2 px-6 rounded hover:bg-blue-200 transition dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600">
            Become an Artist
          </button>
        </Link>
      </motion.div>
    </div>
    {/* <motion.div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" variants={fadeInUp}>
      <img
        className="object-cover object-center rounded shadow-xl border"
        alt="hero"
        src="/art-speaker.jpg"
      />
    </motion.div> */}
  </motion.div>
</section>


      {/* Sign Up Section */}
      
        <SignUp />
      

      {/* Categories Grid */}
      <section>
       <CategoryCard/>
      </section>

      {/* Content Section */}
      <section>
        <Content />
      </section>

      {/* Feature Section */}
      <section>
        <FeatureSection />
      </section>

      {/* Contact Section */}
     
        <Contact />
      
    </main>
  );
}
