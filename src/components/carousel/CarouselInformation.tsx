import React from "react";

interface CarouselInformationProps {
  image: string;
  name: string;
  description: string;
  link: string;
}

const CarouselInformation: React.FC<CarouselInformationProps> = ({
  image,
  name,
  description,
  link,
}) => (
  <div className="relative group rounded-xl overflow-hidden shadow bg-card w-56 max-w-full mx-auto aspect-[4/5] transition-transform duration-200 hover:scale-105">
    <div className="w-full h-full relative">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full absolute inset-0"
      />
      {/* Title at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 py-3 px-4">
        <h3 className="text-base font-bold text-white text-center">{name}</h3>
      </div>
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center text-sm px-4 mb-2">
          {description}
        </p>
        <a
          href={link}
          className="mt-2 px-4 py-2 rounded bg-[color:var(--services-bg)] text-[color:var(--foreground)] font-semibold"
        >
          Find Out More
        </a>
      </div>
    </div>
  </div>
);

export default CarouselInformation;
