import  { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro',
    category: 'Smartphones',
    price: 999,
    rating: 5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    price: 1199,
    rating: 5,
    reviews: 99,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    price: 1099,
    rating: 5,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    category: 'Smartwatches',
    price: 399,
    rating: 4,
    reviews: 82,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: 'AirPods Pro (2nd Gen)',
    category: 'Accessories',
    price: 249,
    rating: 5,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    name: '65W Fast Wall Charger',
    category: 'Chargers',
    price: 49,
    rating: 4,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60',
  },
];

const categories = ['All', 'Smartphones', 'Tablets', 'Smartwatches', 'Accessories', 'Chargers'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Filter products by category and search query
  const filteredProducts = initialProducts
    .filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.id - b.id;
    });

  return (
    <section className="w-full bg-white  py-25 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col  gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="inline-block  text-orange-400 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-900">
            Shop All Products
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Explore our complete lineup of genuine smartphones, wearables, and accessories.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 border border-gray-100 p-4 rounded-lg">
          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-800 focus:outline-none  transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  
          <aside className="lg:col-span-1 bg-gray-50/50 border border-gray-100 p-5 rounded-lg h-fit">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-200/60">
              Categories
            </h3>
            <div className="flex md:flex-col max-md:flex-wrap max-md:justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all text-left ${
                    selectedCategory === cat
                      ? 'bg-orange-400 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      selectedCategory === cat ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {cat === 'All'
                      ? initialProducts.length
                      : initialProducts.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 bg-gray-50/50 border border-gray-100 rounded-2xl text-center">
                <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <h4 className="font-bold text-gray-800 text-base">No Products Found</h4>
                <p className="text-xs text-gray-500 mt-1">Try adjusting your category selection or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="w-full h-48 flex items-center justify-center p-2 mb-4 overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100/60 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Box */}
                    <div className="flex flex-col flex-grow">
                      <div className="w-6 h-[2px] bg-orange-400 mb-2" />
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mb-3">
                        From <span className="font-bold text-gray-900 text-sm">${product.price.toFixed(2)}</span>
                      </p>

                      {/* Footer Rating & Cart */}
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                        <div className="flex items-center space-x-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < product.rating ? 'fill-current' : 'text-gray-200 fill-current'
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[11px] text-gray-400">({product.reviews})</span>
                        </div>

                        <button
                          aria-label="Add to Cart"
                          className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-orange-400 hover:border-orange-400 transition-all duration-200 active:scale-90"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Shop;