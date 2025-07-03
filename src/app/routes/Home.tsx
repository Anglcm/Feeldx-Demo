import HeroSection from "@/components/animated-hero";
import ImageCarousel from "@/components/carousel-slider";
import ValueProposition from "@/components/value-proposition";


const Home = () => {
  // const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1, spacing: 16 }, autoplay: true });

  return (
    <div className="w-full p-0 m-0">
      {/* Header */}
      <HeroSection />

      {/* Service Overview */}
      <ImageCarousel />

      {/* Value Proposition */}
      <ValueProposition />
    </div>
  );
};

export default Home;
