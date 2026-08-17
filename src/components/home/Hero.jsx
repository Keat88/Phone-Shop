
const Hero = () => {
  return (
    <div className="relative w-full min-h-[550px] flex items-center bg-cover bg-center bg-no-repeat bg-[url('https://i.pinimg.com/1200x/f6/6d/5c/f66d5ca01e3b4e493a341c6ea95ae4c5.jpg')] px-6 sm:px-12 lg:px-24 py-16">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl flex flex-col items-start space-y-6 text-white">
        {/* Badge */}
        <span className="inline-block  text-orange-400 border border-orange-400/40 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
          New Arrival
        </span>

        {/* Heading */}
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight hover:bg-amber-300 leading-tight text-white">
          Latest Smartphone{' '}
          <span className="text-orange-400/80">Unlimited Performance</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl">
          Experience cutting-edge technology, sleek designs, and top-tier processing speeds tailored to keep you ahead of the curve.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95">
            Shop Now
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;