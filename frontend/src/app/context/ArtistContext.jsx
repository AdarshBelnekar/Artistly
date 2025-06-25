"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ArtistContext = createContext();

export function ArtistProvider({ children }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("artist-data");
    if (stored) setArtists(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("artist-data", JSON.stringify(artists));
  }, [artists]);

  const addArtist = (artist) => {
    setArtists((prev) => [...prev, artist]);
  };

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  );
}

export const useArtist = () => useContext(ArtistContext);
