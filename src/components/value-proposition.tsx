import { Eye, Shield, Zap, Users, Settings, Award } from 'lucide-react';
import { useState } from 'react';

const ValueProposition = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const values = [
    {
      icon: <Eye className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "Enhanced Visualization",
      description: "FeelDX uses 3D and 4D BIM to create immersive visual experiences, allowing clients to better understand, plan, and communicate their projects with unprecedented clarity and detail."
    },
    {
      icon: <Shield className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "Improved Project Control",
      description: "We offer comprehensive solutions for real-time monitoring, risk management, and streamlined project execution, helping to identify potential issues early and optimize workflows throughout the project lifecycle."
    },
    {
      icon: <Zap className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "Increased Efficiency",
      description: "By seamlessly integrating cutting-edge technology with deep industry expertise, FeelDX helps clients accelerate design iterations, enhance communication, and significantly reduce both time and costs associated with construction projects."
    },
    {
      icon: <Users className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "Strategic Partnerships",
      description: "FeelDX collaborates closely with architects, engineers, and developers to provide comprehensive support throughout the entire project lifecycle, ensuring seamless integration and optimal results."
    },
    {
      icon: <Settings className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "Tailored Solutions",
      description: "We develop and deliver customized strategies and innovative solutions based on the unique requirements and challenges of each project, rather than adopting a generic one-size-fits-all approach."
    },
    {
      icon: <Award className="w-12 h-12" style={{ color: 'var(--primary)' }} />,
      title: "AEC Industry Expertise",
      description: "Our experienced team possesses deep knowledge and extensive experience in the Architecture, Engineering, and Construction industry, enabling us to provide valuable insights, recommendations, and strategic guidance."
    }
  ];

  // Helper to determine if mobile/tablet
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="py-20 px-6 min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-foreground">
            Why Choose FeelDX?
          </h1>
        </div>

        {/* Cards Grid - 3 rows of 3 cards each */}
        <div className="space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value, index) => {
              const cardIdx = index;
              const isOpen = openIndex === cardIdx;
              return (
                <div
                  key={index}
                  className="group relative bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] flex flex-col items-center justify-center text-center hover:scale-105 hover:z-10"
                  onClick={() => {
                    if (window.innerWidth < 1024) setOpenIndex(isOpen ? null : cardIdx);
                  }}
                >
                  {/* Default Content */}
                  <div className={`transition-opacity duration-300 ${isOpen && isMobile ? 'opacity-0' : 'group-hover:opacity-0'}`}> 
                    <div className="w-full flex justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description: show on hover (desktop) or click (mobile/tablet) */}
                  <div className={`absolute inset-0 p-6 flex items-center justify-center bg-card text-card-foreground rounded-2xl transition-opacity duration-300 ${isOpen && isMobile ? 'opacity-100 z-20' : 'opacity-0 group-hover:opacity-100'}`}
                    style={{ pointerEvents: isOpen && isMobile ? 'auto' : undefined }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(3, 6).map((value, index) => {
              const cardIdx = index + 3;
              const isOpen = openIndex === cardIdx;
              return (
                <div
                  key={cardIdx}
                  className="group relative bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] flex flex-col items-center justify-center text-center hover:scale-105 hover:z-10"
                  onClick={() => {
                    if (window.innerWidth < 1024) setOpenIndex(isOpen ? null : cardIdx);
                  }}
                >
                  {/* Default Content */}
                  <div className={`transition-opacity duration-300 ${isOpen && isMobile ? 'opacity-0' : 'group-hover:opacity-0'}`}> 
                    <div className="w-full flex justify-center mb-6" >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description: show on hover (desktop) or click (mobile/tablet) */}
                  <div className={`absolute inset-0 p-6 flex items-center justify-center bg-card text-card-foreground rounded-2xl transition-opacity duration-300 ${isOpen && isMobile ? 'opacity-100 z-20' : 'opacity-0 group-hover:opacity-100'}`}
                    style={{ pointerEvents: isOpen && isMobile ? 'auto' : undefined }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Stats Row - Similar to Pearagon's bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2" style={{ color: 'var(--primary)' }}>50+</div>
            <div className="text-muted-foreground text-sm font-medium">Projects Completed</div>
          </div>
          <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2" style={{ color: 'var(--primary)' }}>15+</div>
            <div className="text-muted-foreground text-sm font-medium">Years Experience</div>
          </div>
          <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2" style={{ color: 'var(--primary)' }}>100%</div>
            <div className="text-muted-foreground text-sm font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2" style={{ color: 'var(--primary)' }}>24/7</div>
            <div className="text-muted-foreground text-sm font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;