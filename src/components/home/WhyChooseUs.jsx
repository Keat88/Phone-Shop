import { Headset, ShieldCheck, Tag, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "50,000+ happy customers trust our service.",
  },
  {
    icon: Tag,
    title: "Best Prices Guaranteed",
    description: "Find the best prices on the latest mobiles.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description: "Get help from our experts anytime you need.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Genuine",
    description: "Official warranty on all products.",
  },
];
const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-800">
          Why Choose Us?
        </h2>
      </div>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 p-3 bg-orange-50 rounded-xl text-orange-400">
                <Icon className="w-8 h-8 stroke-[1.75]" />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-gray-600 text-sm sm:text-base leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
