import React, { useState, useEffect } from 'react';

// Professional Building Component with realistic proportions
type ProfessionalBuildingProps = {
  height: number;
  delay: number;
  buildingType: string;
  index: number;
  width?: number;
};

const ProfessionalBuilding = ({ height, delay, buildingType, index, width = 80 }: ProfessionalBuildingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState('foundation');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Phase transitions for BIM-like construction
      setTimeout(() => setPhase('structure'), 500);
      setTimeout(() => setPhase('envelope'), 1000);
      setTimeout(() => setPhase('interior'), 1500);
      setTimeout(() => setPhase('complete'), 2000);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBuildingStyle = () => {
    switch (buildingType) {
      case 'skyscraper':
        return {
          clipPath: 'polygon(0 100%, 0 0, 20% 0, 20% 10%, 80% 10%, 80% 0, 100% 0, 100% 100%)',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
        };
      case 'office':
        return {
          clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)',
          background: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        };
      case 'residential':
        return {
          clipPath: 'polygon(0 100%, 0 20%, 40% 0, 60% 0, 100% 20%, 100% 100%)',
          background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fb923c 100%)',
        };
      case 'tower':
        return {
          clipPath: 'polygon(10% 100%, 10% 0, 90% 0, 90% 100%)',
          background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a78bfa 100%)',
        };
      case 'complex':
        return {
          clipPath: 'polygon(0 100%, 0 30%, 30% 30%, 30% 0, 70% 0, 70% 40%, 100% 40%, 100% 100%)',
          background: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
        };
      default:
        return {
          clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)',
          background: 'linear-gradient(135deg, #374151 0%, #6b7280 50%, #9ca3af 100%)',
        };
    }
  };

  return (
    <div
      className="absolute bottom-0 building-container"
      style={{
        left: `${index * (width + 20) + 50}px`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Foundation Phase */}
      <div
        className={`absolute bottom-0 w-full h-2 bg-gray-600 transition-all duration-500 ${
          phase === 'foundation' && isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${width}px` }}
      />

      {/* Main Building Structure */}
      <div
        className={`building-main transform transition-all duration-1500 ease-out ${
          isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transformOrigin: 'bottom',
          transformStyle: 'preserve-3d',
          ...getBuildingStyle(),
        }}
      >
        {/* BIM Grid Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          phase === 'structure' ? 'opacity-30' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px),
                   repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 16px)
                 `
               }}
          />
        </div>

        <div className={`absolute inset-0 transition-all duration-1000 ${
          phase === 'envelope' ? 'opacity-100' : phase === 'complete' ? 'opacity-75' : 'opacity-0'
        }`}>
          <div className="absolute inset-2 grid gap-1" style={{
            gridTemplateColumns: `repeat(${Math.floor(width / 20)}, 1fr)`,
            gridTemplateRows: `repeat(${Math.floor(height / 15)}, 1fr)`,
          }}>
            {Array.from({ length: Math.floor(width / 20) * Math.floor(height / 15) }).map((_, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-blue-200 to-blue-400 rounded-sm transition-all duration-300 ${
                  phase === 'interior'? 'opacity-80' : phase === 'complete' ? 'opacity-75' : 'opacity-40'
                }`}
                
                style={{
                  animationDelay: `${i * 50}ms`,
                  animation: phase === 'interior' ? 'window-activate 0.5s ease-out forwards' : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Building Completion Glow */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          phase === 'complete' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white to-transparent opacity-10 animate-pulse" />
        </div>
      </div>

      {/* 3D Side Face */}
      <div
        className={`building-side absolute top-0 transform transition-all duration-1500 ease-out ${
          isVisible ? 'scale-y-100 opacity-70' : 'scale-y-0 opacity-0'
        }`}
        style={{
          width: '30px',
          height: `${height}px`,
          left: `${width}px`,
          transformOrigin: 'bottom left',
          transform: 'rotateY(45deg)',
        //   background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
          ...getBuildingStyle(),
          filter: 'brightness(0.6)',
        }}
      />
    </div>
  );
};

// BIM Process Visualization
type BIMProcessLineProps = {
  delay: number;
  points: { x: number; y: number }[];
  label: string;
  phase: string;
};

const BIMProcessLine = ({ delay, points, label, phase }: BIMProcessLineProps) => {
  const [progress, setProgress] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setShowLabel(true);
            return 100;
          }
          return prev + 3;
        });
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getPhaseColor = () => {
    switch (phase) {
      case '3D': return '#3b82f6';
      case '4D': return '#059669';
      case '5D': return '#dc2626';
      default: return '#6b7280';
    }
  };

  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full" style={{ zIndex: 20 }}>
        <defs>
          <linearGradient id={`gradient-${phase}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={getPhaseColor()} stopOpacity="0.8" />
            <stop offset="100%" stopColor={getPhaseColor()} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d={`M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`}
          stroke={`url(#gradient-${phase})`}
          strokeWidth="3"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset={1000 - (progress * 10)}
          style={{
            filter: `drop-shadow(0 0 6px ${getPhaseColor()}40)`,
            transition: 'stroke-dashoffset 0.1s ease-out',
          }}
        />
      </svg>
      
      {/* Phase Label */}
      {showLabel && (
        <div
          className="absolute text-white text-xs font-semibold bg-black bg-opacity-50 px-2 py-1 rounded backdrop-blur-sm"
          style={{
            left: `${(points[0].x + points[1].x) / 2 - 20}px`,
            top: `${(points[0].y + points[1].y) / 2 - 10}px`,
            color: getPhaseColor(),
            border: `1px solid ${getPhaseColor()}`,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

// Service Tag Component
type ServiceTagProps = {
  service: string;
  delay: number;
  position: React.CSSProperties | { [key: string]: string };
};

const ServiceTag = ({ service, delay, position }: ServiceTagProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute text-white text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        ...position,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      {service}
    </div>
  );
};

// Main Professional Cityscape
const ProfessionalCityscape = () => {
  const buildings = [
    { height: 120, delay: 0, buildingType: 'office', index: 0, width: 70 },
    { height: 180, delay: 600, buildingType: 'skyscraper', index: 1, width: 90 },
    { height: 140, delay: 1200, buildingType: 'residential', index: 2, width: 85 },
    { height: 220, delay: 1800, buildingType: 'tower', index: 3, width: 60 },
    { height: 160, delay: 2400, buildingType: 'complex', index: 4, width: 100 },
    { height: 110, delay: 3000, buildingType: 'office', index: 5, width: 75 },
  ];

//   const bimProcessLines = [
//     { delay: 4000, points: [{ x: 50, y: 380 }, { x: 650, y: 380 }], label: '3D Modeling', phase: '3D' },
//     { delay: 4500, points: [{ x: 200, y: 380 }, { x: 200, y: 100 }], label: '4D Planning', phase: '4D' },
//     { delay: 5000, points: [{ x: 400, y: 380 }, { x: 400, y: 80 }], label: '5D BIM', phase: '5D' },
//     { delay: 5500, points: [{ x: 500, y: 380 }, { x: 500, y: 120 }], label: 'Visualization', phase: '3D' },
//   ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = isMobile
    ? [
        { service: 'Custom Animations', delay: 3000, position: { top: '10%', left: '0' } },
        { service: '3D Modelling', delay: 3300, position: { top: '20%', left: '0' } },
        { service: '3D & 4D Visualisation and Project Control', delay: 2600, position: { top: '0%', left: '0' } },
        { service: '5D BIM Planning', delay: 2900, position: { top: '30%', left: '0' } },
        { service: 'Multimedia Design', delay: 2200, position: { top: '40%', left: '0' } },
        { service: 'Storytelling', delay: 3100, position: { top: '50%', left: '0' } },
      ]
    : [
        { service: 'Custom Animations', delay: 3000, position: { top: '10%', left: '10%' } },
        { service: '3D Modelling', delay: 3300, position: { top: '15%', right: '15%' } },
        { service: '3D & 4D Visualisation and Project Control', delay: 2600, position: { bottom: '42%', left: '20%' } },
        { service: '5D BIM Planning', delay: 2900, position: { bottom: '30%', right: '10%' } },
        { service: 'Multimedia Design', delay: 2200, position: { bottom: '55%', right: '80%' } },
        { service: 'Storytelling', delay: 3100, position: { bottom: '63%', right: '65%' } },
      ];

  return (
    <div 
      className="relative w-full h-96 mx-auto"
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Professional Ground Grid */}
      <div
        className="absolute bottom-0 w-full h-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transform"
        style={{
          transformOrigin: 'bottom',
          transform: 'rotateX(70deg)',
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)
          `,
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Buildings */}
      {buildings.map((building, index) => (
        <ProfessionalBuilding
          key={index}
          height={building.height}
          delay={building.delay}
          buildingType={building.buildingType}
          index={building.index}
          width={building.width}
        />
      ))}

      {/* BIM Process Lines */}
      {/* {bimProcessLines?.map((line, index) => (
        <BIMProcessLine
          key={index}
          delay={line.delay}
          points={line.points}
          label={line.label}
          phase={line.phase}
        />
      ))} */}

      {/* Service Tags */}
      {services.map((service, index) => (
        <ServiceTag
          key={index}
          service={service.service}
          delay={service.delay}
          position={service.position}
        />
      ))}
    </div>
  );
};

// Main Hero Section
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnimatedRow, setShowAnimatedRow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setShowAnimatedRow(true), 300); // fade in after 300ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      <style>{`
        @keyframes window-activate {
          0% { 
            opacity: 0.4; 
            box-shadow: none;
          }
          100% { 
            opacity: 0.9; 
            box-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
          }
        }
        
        @keyframes professional-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 
                        0 0 40px rgba(59, 130, 246, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 
                        0 0 60px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes float-professional {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
          }
        }
        
        .building-container {
          transform-style: preserve-3d;
        }
        
        .building-main, .building-side {
          transform-style: preserve-3d;
          backface-visibility: visible;
        }
        
        .animate-professional-glow {
          animation: professional-glow 4s ease-in-out infinite;
        }
      `}</style>
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border border-blue-400 transform rotate-45 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-cyan-400 transform rotate-12" 
             style={{ animation: 'float-professional 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-purple-400 transform rotate-45 animate-pulse" 
             style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2 sm:px-4">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div
            className={`flex flex-col sm:flex-row mt-10 items-center justify-center mb-4 transition-all duration-1000
              ${showAnimatedRow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} font-sans
              space-y-2 sm:space-y-0 sm:space-x-4`}
            style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}
          >
            <span className="text-lg xs:text-xl md:text-2xl lg:text-4xl font-bold text-white">Plan</span>
            <span className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg xs:text-xl md:text-2xl lg:text-4xl font-bold text-white delay-200">Visualise</span>
            <span className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg xs:text-xl md:text-2xl lg:text-4xl font-bold text-white delay-400">Transform</span>
          </div>
          <p className={`text-base xs:text-lg md:text-xl text-gray-300 mb-8 max-w-xs sm:max-w-md md:max-w-3xl transition-all duration-1000 ${showAnimatedRow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} text-center mx-auto px-2`}> 
            We push beyond visual representation, integrating and connecting with your project's
            requirements, bringing them to life and enhancing clarity to create a truly immersive experience.
          </p>
          
          {/* Professional Cityscape */}
          <div className="mb-8 relative w-full max-w-full overflow-x-auto">
            <ProfessionalCityscape />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-professional-glow">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      
      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-blue-300">Explore Services</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {isMobile && <div>Mobile view</div>}
    </div>
  );
};

export default HeroSection;