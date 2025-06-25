// app/dashboard/page.jsx
"use client";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import Header from "../components/Header";


// Dummy submitted artists (simulate as if collected from onboard form)
const dummySubmissions = [
  {
    name: "DJ Nova",
    category: "DJ",
    location: "Mumbai",
    fee: "₹10k–₹20k",
  },
  {
    name: "Sonal Singh",
    category: "Dancer",
    location: "Delhi",
    fee: "₹20k–₹30k",
  },
  {
    name: "Neha Sharma",
    category: "Singer",
    location: "Kolkata",
    fee: "₹15k–₹25k",
  },
];

export default function DashboardPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Simulate fetching submitted data
    setArtists(dummySubmissions);
  }, []);

  return (
    <div className="min-h-screen">
    <Header />
    <div className="p-4 bg-gradient-to-b from-slate-50 via-slate-100 to-white">
      
      <h1 className="text-2xl font-bold my-6">Manager Dashboard</h1>

      {artists.length > 0 ? (
        <Table data={artists} />
      ) : (
        <p className="text-gray-500">No artist submissions yet.</p>
      )}
    </div></div>
  );
}
