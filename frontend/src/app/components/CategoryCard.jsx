"use client";
import Link from "next/link";

const categories = [
  {
    title: "Blog",
    description: "Thoughts and stories from our artists.",
    image: "./art.jpg",
    link: "/blog",
  },
  {
    title: "Gallery",
    description: "Visual showcase of past performances.",
    image: "/art-speaker.jpg",
    link: "/gallery",
  },
  {
    title: "Hero",
    description: "Powerful landing page sections.",
    image: "/dancer.jpg",
    link: "/",
  },
];

export default function CategoryCard() {
  return (
    <section className="text-gray-600 body-font p-2">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          {/* Main card */}
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-lg shadow-md overflow-hidden">
            <img
              alt="category"
              className="w-full object-cover h-full object-center block opacity-70 absolute inset-0"
              src={categories[0].image}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-grey-200 font-semibold mb-2">
                {categories[0].title}
              </h2>
              <p className="leading-relaxed text-white">{categories[0].description}</p>
             
            </div>
          </div>

          {/* Two-column grid */}
          <div className="flex flex-wrap -mx-2">
            {categories.slice(1).map((cat, i) => (
              <div key={i} className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 py-20 px-6 relative rounded-lg shadow-md overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                    src={cat.image}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-semibold mb-2">
                      {cat.title}
                    </h2>
                    <p className="leading-relaxed text-white">{cat.description}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
