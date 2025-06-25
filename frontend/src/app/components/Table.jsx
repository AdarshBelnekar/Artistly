// components/Table.jsx
export default function Table({ data }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Name</th>
            <th className="px-4 py-2 text-left font-medium">Category</th>
            <th className="px-4 py-2 text-left font-medium">Location</th>
            <th className="px-4 py-2 text-left font-medium">Fee</th>
            <th className="px-4 py-2 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((artist, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{artist.name}</td>
              <td className="px-4 py-2">{artist.category || artist.categories?.join(", ")}</td>
              <td className="px-4 py-2">{artist.location}</td>
              <td className="px-4 py-2">{artist.priceRange || artist.fee}</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
