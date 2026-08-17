const stats = [
  { label: "Happy Customers", value: "50K+" },
  { label: "Products Available", value: "1,200+" },
  { label: "Official Brands", value: "25+" },
  { label: "Years Experience", value: "8+" },
];
const ContentAbout = () => {
  return (
    <section className="w-full bg-white py-30 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section: Heading & Grid Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col items-start space-y-6">
            <span className="inline-block  text-orange-400 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              About Our Store
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Your Premier Destination for{" "}
              <span className="text-orange-400">Next-Gen Tech</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded with a passion for innovation, we deliver original
              smartphones, gadgets, and accessories right to your doorstep. We
              believe in high performance, transparent pricing, and customer
              service that goes above and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border border-orange-100 flex items-center justify-center text-orange-400 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  100% Genuine Items
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border border-orange-100 flex items-center justify-center text-orange-400 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  Fast Doorstep Delivery
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border border-orange-100 flex items-center justify-center text-orange-400 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  Official Brand Warranty
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border border-orange-100 flex items-center justify-center text-orange-400 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  24/7 Expert Assistance
                </span>
              </div>
            </div>
          </div>

          <div className="relative group flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img
                src="https://i.pinimg.com/1200x/aa/d8/47/aad8479ecb799a1f02221a25adf10fe7.jpg"
                alt="Our Tech Store Showcase"
                className="w-full h-full object-cover hover:scale-105 duration-200 transition-transform"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 sm:left-4 bg-white/95 backdrop-blur-md border duration-200 transition-transform hover:-translate-x-1 border-gray-100 p-5 rounded-lg shadow-xl max-w-xs hidden sm:flex items-center space-x-4">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Guaranteed Quality
                </p>
                <p className="text-sm font-bold text-gray-900">
                  Verified Retailer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-3xl font-extrabold text-orange-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentAbout;
