import { AppProvider } from '@/app/provider';
import { AppRouter } from '@/app/router';
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
    >
      <ChevronUp className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14" />
    </button>
  ) : null;
}

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
      <BackToTopButton />
    </AppProvider>
  );
};

export default App;
