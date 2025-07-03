import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';

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
      {/* <h2 className="text-3xl font-bold text-center mb-0 text-foreground mb-20">
        SERVICE OVERVIEW
      </h2> */}
      <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-foreground">
            Service Overview
          </h1>
        </div>
      
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

const testimonials = [
  {
    comment: "FeelDX exceeded our expectations. The 3D models made our project so much clearer.",
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    color: "text-yellow-600",
  },
  {
    comment: "The team was responsive and the results were fantastic. Highly recommended!",
    name: "Bharat Kunal",
    role: "Manager at xyz",
    color: "text-orange-600",
  },
  {
    comment: "Great communication and delivery. Will work with them again for sure.",
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    color: "text-yellow-600",
  },
];

const TestimonialsSection = () => (
  <div className="py-16 px-4 bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-2 uppercase tracking-wide">
      TESTIMONIALS
    </h2>
    <p className="text-center text-gray-600 mb-10">
      Subscribe Easy Tutorials YouTube channel to watch more videos.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200"
        >
          <div className="relative mb-4">
            <span className="absolute -top-2 -left-2 text-yellow-500">
              <Quote className="w-7 h-7" />
            </span>
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-md mx-auto">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          </div>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            {t.comment}
          </p>
          <div className="font-bold text-base mb-1">
            <span className={t.color}>{t.name}</span>
            <span className="text-gray-500 font-normal"> {t.role && ` ${t.role}`}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageCarousel;