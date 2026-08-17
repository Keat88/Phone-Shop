const categories = [
  {
    id: 1,
    name: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Cases & Covers",
    image:
      "https://images.unsplash.com/photo-1601593378579-2d93e2501d54?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Chargers",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&auto=format&fit=crop&q=60",
  },
];
const Category = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-gray-900">
          Shop by Category
        </h2>
        <a
          href="#"
          className="flex items-center space-x-1 text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-900 hover:text-orange-500 transition-colors"
        >
          <span>View All Categories</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

    
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group flex flex-col items-center justify-between bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-full h-45 flex items-center justify-center p-2 mb-3 rounded-xl bg-gray-50 group-hover:bg-gray-100/70 transition-colors overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <span className="font-semibold text-gray-900 text-xs sm:text-sm text-center leading-tight group-hover:text-orange-500 transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
