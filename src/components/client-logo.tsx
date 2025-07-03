import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import client1 from "@/assets/clients-logo/adco-logo.png";
import client2 from "@/assets/clients-logo/barpa-logo.png";
import client3 from "@/assets/clients-logo/becon-logo.png";
import client4 from "@/assets/clients-logo/broad-logo.png";
import client5 from "@/assets/clients-logo/bryant-logo.png";
import client6 from "@/assets/clients-logo/build-environs-logo.png";
import client7 from "@/assets/clients-logo/built-logo.png";
import client8 from "@/assets/clients-logo/camillo-logo.png";
import client9 from "@/assets/clients-logo/cappabuild-logo.png";
import client10 from "@/assets/clients-logo/cicg-logo.png";
import client11 from "@/assets/clients-logo/city-logo.png";
import client12 from "@/assets/clients-logo/devco-logo.png";
import client13 from "@/assets/clients-logo/fkd-logo.png";
import client14 from "@/assets/clients-logo/fleetwood-logo.png";
import client15 from "@/assets/clients-logo/gainsville-logo.png";
import client16 from "@/assets/clients-logo/greater-logo.png";
import client17 from "@/assets/clients-logo/grindley-logo.png";
import client18 from "@/assets/clients-logo/hacer-group.png";
import client19 from "@/assets/clients-logo/harris-logo.png";
import client20 from "@/assets/clients-logo/hunsenyuncken-logo.png";
import client21 from "@/assets/clients-logo/hutchinson-logo.png";
import client22 from "@/assets/clients-logo/intrec_logo.png";
import client23 from "@/assets/clients-logo/kapitol-group.jpg";
import client24 from "@/assets/clients-logo/lahey_logo.png";
import client25 from "@/assets/clients-logo/lloyd-logo.png";
import client26 from "@/assets/clients-logo/m.png";
import client27 from "@/assets/clients-logo/mainbrace-logo.png";
import client28 from "@/assets/clients-logo/nicholson-logo.png";
import client29 from "@/assets/clients-logo/north_logo.png";
import client30 from "@/assets/clients-logo/plico-logo.png";
import client31 from "@/assets/clients-logo/queen-logo.jpg";
import client32 from "@/assets/clients-logo/renascent-logo.png";
import client33 from "@/assets/clients-logo/total-logo.png";
import client34 from "@/assets/clients-logo/zauner-logo.png";


// Add more logos as needed
const logos = [
  { id: 1, src: client1, name: "Client 1" },
  { id: 2, src: client2, name: "Client 2" },
  { id: 3, src: client3, name: "Client 3" },
  { id: 4, src: client4, name: "Client 4" },
  { id: 5, src: client5, name: "Client 5" },
  { id: 6, src: client6, name: "Client 6" },
  { id: 7, src: client7, name: "Client 7" },
  { id: 8, src: client8, name: "Client 8" },
  { id: 9, src: client9, name: "Client 9" },
  { id: 10, src: client10, name: "Client 10" },
  { id: 11, src: client11, name: "Client 11" },
  { id: 12, src: client12, name: "Client 12" },
  { id: 13, src: client13, name: "Client 13" },
  { id: 14, src: client14, name: "Client 14" },
  { id: 15, src: client15, name: "Client 15" },
  { id: 16, src: client16, name: "Client 16" }, 
  { id: 17, src: client17, name: "Client 17" },
  { id: 18, src: client18, name: "Client 18" },
  { id: 19, src: client19, name: "Client 19" },
  { id: 20, src: client20, name: "Client 20" },
  { id: 21, src: client21, name: "Client 21" },
  { id: 22, src: client22, name: "Client 22" },
  { id: 23, src: client23, name: "Client 23" },
  { id: 24, src: client24, name: "Client 24" },
  { id: 25, src: client25, name: "Client 25" },
  { id: 26, src: client26, name: "Client 26" },
  { id: 27, src: client27, name: "Client 27" },
  { id: 28, src: client28, name: "Client 28" },
  { id: 29, src: client29, name: "Client 29" },
  { id: 30, src: client30, name: "Client 30" },
  { id: 31, src: client31, name: "Client 31" },
  { id: 32, src: client32, name: "Client 32" },
  { id: 33, src: client33, name: "Client 33" },
  { id: 34, src: client34, name: "Client 34" },
  // ...add more as needed
];

const ClientLogoCarousel = () => {
  const [page, setPage] = useState(0);
  const [logosPerRow, setLogosPerRow] = useState(5);
  const [rows, setRows] = useState(2);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive logic
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) { // Mobile
        setLogosPerRow(1);
        setRows(1); // Only one row on mobile
      } else if (window.innerWidth < 900) { // Small tablet
        setLogosPerRow(2);
        setRows(2);
      } else if (window.innerWidth < 1200) { // Large tablet
        setLogosPerRow(3);
        setRows(2);
      } else { // Desktop
        setLogosPerRow(5);
        setRows(2);
      }
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const LOGOS_PER_PAGE = logosPerRow * rows;
  const totalPages = Math.ceil(logos.length / LOGOS_PER_PAGE);

  // Auto-slide logic
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % totalPages);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages, logosPerRow, rows]);

  // Get the logos for the current page
  const startIdx = page * LOGOS_PER_PAGE;
  const pageLogos = logos.slice(startIdx, startIdx + LOGOS_PER_PAGE);

  // Split into rows
  const rowArr = [];
  for (let i = 0; i < rows; i++) {
    rowArr.push(pageLogos.slice(i * logosPerRow, (i + 1) * logosPerRow));
  }

  const goToPrevious = () => setPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  const goToNext = () => setPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-5xl mx-auto p-0 text-foreground">
      {/* <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
        OUR CLIENTS
      </h2> */}
      <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-foreground">
            Our Clients
          </h1>
        </div>
      <div className="relative">
        <div className="flex flex-col gap-4 items-center">
          {rowArr.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-row justify-between items-center w-full px-2 sm:px-8"
              style={{ minHeight: '120px' }}
            >
              {row.map((logo) => (
                <div
                  key={logo.id}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className="w-full max-w-[180px] aspect-square bg-white rounded-full shadow flex items-center justify-center overflow-hidden border border-gray-200 mx-auto p-2 sm:w-48 sm:h-48 lg:w-40 lg:h-40"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === page
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogoCarousel;