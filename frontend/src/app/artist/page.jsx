 "use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterBlock from "../components/FilterBlock";
import ArtistCard from "../components/ArtistCard";
import data from "@/data/artist.json";

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    location: "",
    priceRange: "all",
  });

  const [filteredArtists, setFilteredArtists] = useState(data);

  useEffect(() => {
    let results = data;

    if (filters.category !== "all") {
      results = results.filter((a) => a.category === filters.category);
    }

    if (filters.location) {
      results = results.filter((a) =>
        a.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.priceRange !== "all") {
      results = results.filter((a) => a.priceRange === filters.priceRange);
    }

    setFilteredArtists(results);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 ">
      <Header />
    <main className="p-3 ">
      
      <h1 className="text-2xl font-bold my-6">Browse Artists</h1>

      <FilterBlock filters={filters} setFilters={setFilters} className="p-2" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredArtists.map((artist) => (
    <ArtistCard key={artist.id} artist={artist} />
  ))}
</div>

    </main></div>
  );
}
