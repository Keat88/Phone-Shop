

const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro',
    price: '999.00',
    rating: 5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: '1,199.00',
    rating: 5,
    reviews: 99,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'OnePlus 12R 5G',
    price: '549.00',
    rating: 4,
    reviews: 75,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Xiaomi 14 Ultra',
    price: '899.00',
    rating: 5,
    reviews: 80,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: 'Google Pixel 8 Pro',
    price: '799.00',
    rating: 4,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60',
  },
];

const PopularSection = () => {
  return (
   <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-gray-900">
          Popular Products
        </h2>
        <a
          href="#"
          className="flex items-center space-x-1 text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-900 hover:text-orange-500 transition-colors"
        >
          <span>View All Products</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col justify-between bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Image Box */}
            <div className="w-full h-48 flex items-center justify-center  mb-4 overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100/60 transition-colors">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Box */}
            <div className="flex flex-col flex-grow">
          
              <div className="w-6 h-[2px] bg-orange-500 mb-2" />

              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-1">
                {product.name}
              </h3>

              <p className="text-xs text-gray-500 font-medium mb-3">
                From <span className="font-bold text-gray-900 text-sm">${product.price}</span>
              </p>

              {/* Rating & Cart Footer */}
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                <div className="flex items-center space-x-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 ${i < product.rating ? 'fill-current' : 'text-gray-200 fill-current'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400">({product.reviews})</span>
                </div>

                {/* Cart Button */}
                <button
                  aria-label="Add to Cart"
                  className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-orange-400 hover:border-orange-300 transition-all duration-200 active:scale-90"
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
    </section>
  )
}

export default PopularSection