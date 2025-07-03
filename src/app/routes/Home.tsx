// import { Header } from "@/components/header";
import HeroSection from "@/components/animated-hero";
import ImageCarousel from "@/components/carousel-slider";
import ValueProposition from "@/components/value-proposition";
import ClientLogoCarousel from "@/components/client-logo";
import Testimonials from "@/components/testimonials";

const Home = () => {
  // const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1, spacing: 16 }, autoplay: true });

  return (
    <div className="w-full p-0 m-0">
      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Service Overview */}
      <section id="services">
        <ImageCarousel />
      </section>

      {/* Value Proposition */}
      <section id="value">
        <ValueProposition />
      </section>

      {/* Client Logo Carousel */}
      <section id="clients">
        <ClientLogoCarousel />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
