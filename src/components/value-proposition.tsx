import { Eye, Shield, Zap, Users, Settings, Award } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: <Eye className="w-12 h-12 text-green-500" />,
      title: "Enhanced Visualization",
      description: "FeelDX uses 3D and 4D BIM to create immersive visual experiences, allowing clients to better understand, plan, and communicate their projects with unprecedented clarity and detail."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Improved Project Control",
      description: "We offer comprehensive solutions for real-time monitoring, risk management, and streamlined project execution, helping to identify potential issues early and optimize workflows throughout the project lifecycle."
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: "Increased Efficiency",
      description: "By seamlessly integrating cutting-edge technology with deep industry expertise, FeelDX helps clients accelerate design iterations, enhance communication, and significantly reduce both time and costs associated with construction projects."
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Strategic Partnerships",
      description: "FeelDX collaborates closely with architects, engineers, and developers to provide comprehensive support throughout the entire project lifecycle, ensuring seamless integration and optimal results."
    },
    {
      icon: <Settings className="w-12 h-12 text-green-500" />,
      title: "Tailored Solutions",
      description: "We develop and deliver customized strategies and innovative solutions based on the unique requirements and challenges of each project, rather than adopting a generic one-size-fits-all approach."
    },
    {
      icon: <Award className="w-12 h-12 text-green-500" />,
      title: "AEC Industry Expertise",
      description: "Our experienced team possesses deep knowledge and extensive experience in the Architecture, Engineering, and Construction industry, enabling us to provide valuable insights, recommendations, and strategic guidance."
    }
  ];

  return (
    <div className="py-20 px-6 min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-foreground">
            Why Choose FeelDX
          </h1>
        </div>

        {/* Cards Grid - 3 rows of 3 cards each */}
        <div className="space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] flex flex-col items-center justify-center text-center hover:scale-105 hover:z-10"
              >
                {/* Default Content */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-full flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {value.title}
                  </h3>
                </div>

                {/* Hover Description */}
                <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-2xl">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(3, 6).map((value, index) => (
              <div
                key={index + 3}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] flex flex-col items-center justify-center text-center hover:scale-105 hover:z-10"
              >
                {/* Default Content */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-full flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {value.title}
                  </h3>
                </div>

                {/* Hover Description */}
                <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-2xl">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats Row - Similar to Pearagon's bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700 text-sm font-medium">Projects Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-700 text-sm font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-700 text-sm font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700 text-sm font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;