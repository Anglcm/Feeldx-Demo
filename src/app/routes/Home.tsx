import HeroSection from "@/components/animated-hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Welcome to the Home Page!</h2>
        <p className="mt-4">This is your SPA home page.</p>
      </div>
    </div>
  );
};

export default Home;
