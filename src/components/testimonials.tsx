import { Quote, User } from 'lucide-react';
import { useState, useEffect, useRef } from "react";

const ValueProposition = () => {
//   const values = [
//     {
//       icon: <Eye className="w-12 h-12 text-green-500" />,
//       title: "Director",
//       description: "The were friendly, professional, ethical people who understood exactly what we required in order to deliver a very complex project."
//     },
//     {
//       icon: <Shield className="w-12 h-12 text-green-500" />,
//       title: "Improved Project Control",
//       description: "We offer comprehensive solutions for real-time monitoring, risk management, and streamlined project execution, helping to identify potential issues early and optimize workflows throughout the project lifecycle."
//     },
//     {
//       icon: <Zap className="w-12 h-12 text-green-500" />,
//       title: "Increased Efficiency",
//       description: "By seamlessly integrating cutting-edge technology with deep industry expertise, FeelDX helps clients accelerate design iterations, enhance communication, and significantly reduce both time and costs associated with construction projects."
//     },
//     {
//       icon: <Users className="w-12 h-12 text-green-500" />,
//       title: "Strategic Partnerships",
//       description: "FeelDX collaborates closely with architects, engineers, and developers to provide comprehensive support throughout the entire project lifecycle, ensuring seamless integration and optimal results."
//     },
//     {
//       icon: <Settings className="w-12 h-12 text-green-500" />,
//       title: "Tailored Solutions",
//       description: "We develop and deliver customized strategies and innovative solutions based on the unique requirements and challenges of each project, rather than adopting a generic one-size-fits-all approach."
//     },
//     {
//       icon: <Award className="w-12 h-12 text-green-500" />,
//       title: "AEC Industry Expertise",
//       description: "Our experienced team possesses deep knowledge and extensive experience in the Architecture, Engineering, and Construction industry, enabling us to provide valuable insights, recommendations, and strategic guidance."
//     },
//     {
//       icon: <Award className="w-12 h-12 text-green-500" />,
//       title: "AEC Industry Expertise",
//       description: "Our experienced team possesses deep knowledge and extensive experience in the Architecture, Engineering, and Construction industry, enabling us to provide valuable insights, recommendations, and strategic guidance."
//     },
    
//   ];

  const testimonials = [
    {
      name: "National Brand",
      role: "Tier 3 - NSW & VIC", 
      comment: "Thank you team, just had a look. Everything looks really well put together! Thanks again for being so responsive and making the process easy for us. You brought the story to life and help portray the end vision to the client. Well done!",
    },
    {
      name: "Director",
      role: "Tier 2 Construction - National",
      comment: "The were friendly, professional, ethical people who understood exactly what we required in order to deliver a very complex project."
    },
    {
      name: "Chief Estimator",
      role: "Tier 3 Builder - GEELONG",
      comment: "They understood the building process and we didn't have to hold their hands. FEELDX went over and above with their quality of service.",
    },
    {
      name: "Estimating Manager",
      role: "Tier 2 VIC",
      comment: "Quality of visuals and attendion to detail captured the intent of our programme and methodology."
    },
    {
      name: "Jane Doe",
      role: "Designer at abc",
      comment:
        "This is a sample testimonial for the slider. Everything works perfectly and looks great!",
    },
    
    {
      name: "Estimating Manager",
      role: "Tier 3 - VIC",
      comment: "Combined with their technical understanding on how to plan to build effeciently and safely, FEELDX visualisations team was a breeze to deal with.",
    },
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3; // Default for SSR
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const AUTO_SLIDE_INTERVAL = 3500;

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update cards per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate how many "pages" of testimonials there are
  const pageCount = Math.ceil(testimonials.length / cardsPerView);

  // Move to next page
  const next = () => setIndex((prev) => (prev + 1) % pageCount);

  // Auto-slide effect
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pageCount]);

  // Get testimonials for current page
  const getCurrentTestimonials = () => {
    const start = index * cardsPerView;
    return testimonials.slice(start, start + cardsPerView);
  };

  // Handle manual dot click
  const goToPage = (idx: number) => setIndex(idx);

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4">
         <div className="text-center mb-16">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-light mb-4 text-foreground">
            Testimonials
          </h1>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
          {getCurrentTestimonials().map((t, i) => (
            <div
              key={i}
              className="relative bg-card text-card-foreground rounded-xl shadow-lg pt-14 pb-8 px-6 flex flex-col items-center mt-8"
            >
              {/* Icon Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-card shadow-md bg-muted flex items-center justify-center">
                  <User className="w-14 h-14" style={{ color: 'var(--primary)' }} />
                </div>
              </div>
              {/* Quote and Text */}
              <Quote className="w-8 h-8 mb-2" style={{ color: 'var(--primary)' }} />
              <p className="text-center text-foreground mb-6 mt-2">
                {t.comment}
              </p>
              {/* Name and Role */}
              <div className="text-center mt-auto">
                <span className={`font-bold text-lg text-foreground`}>{t.name}</span>
                <span className="block text-sm mt-1 text-muted-foreground" >{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index ? 'scale-125' : ''
              }`}
              style={{ background: idx === index ? 'var(--primary)' : 'var(--muted)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;