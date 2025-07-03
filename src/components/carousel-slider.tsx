import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img3d from "@/assets/3d-image.jpg";
import img4d from "@/assets/4d.jpg";
import img5d from "@/assets/5d.jpeg";
import imginterior from "@/assets/interior.jpg";
import imgmultimedia from "@/assets/multimedia.png";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5);

  const images = [
    {
      id: 1,
      src: img3d,
      name: "BIM Services -3D Design",
      description: "Professional 3D modeling and visualization services"
    },
    {
      id: 2,
      src: img4d,
      name: "BIM Services -4D Animation",
      description: "Advanced 4D animation and motion graphics"
    },
    {
      id: 3,
      src: img5d,
      name: "BIM Services -5D Experience",
      description: "Immersive 5D multimedia experience design"
    },
    {
      id: 4,
      src: imginterior,
      name: "Interior Design",
      description: "Modern interior design and space planning"
    },
    {
      id: 5,
      src: imgmultimedia,
      name: "Multimedia",
      description: "Creative multimedia content and digital solutions"
    }
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3); // Large tablet
      } else {
        setCardsPerView(5); // Desktop
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, images.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(Math.min(maxIndex, index));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-0 text-foreground mt-30 mb-5">
      <h2 className="text-3xl font-bold text-center mb-0 text-foreground mb-20">
        SERVICE OVERVIEW
      </h2>
      
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="group flex flex-col justify-between bg-white rounded-lg  overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-96">
                  {/* Image Container */}
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-t-lg">
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error('Image failed to load:', image.src);
                        // e.target.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', image.src);
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center text-foreground">
                      <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-sm leading-relaxed text-foreground">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Name */}
                  <div className="p-4 flex-1 flex items-end">
                    <h3 className="text-lg font-semibold text-gray-800 text-center w-full">
                      {image.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 disabled:bg-opacity-50 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 disabled:bg-opacity-50 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default ImageCarousel;