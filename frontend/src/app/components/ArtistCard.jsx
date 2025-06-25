export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow w-full">
      <img
        src={artist.image}
        alt={`Photo of ${artist.name}`}
        className="w-full h-52 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="mb-3 space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">{artist.name}</h2>
          <p className="text-sm text-gray-600">Category: {artist.category}</p>
          <p className="text-sm text-gray-600">Location: {artist.location}</p>
          <p className="text-sm text-gray-600">Fee: {artist.priceRange}</p>
          <button className="mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Ask for Quote
        </button>
        </div>

        
      </div>
    </div>
  );
}
