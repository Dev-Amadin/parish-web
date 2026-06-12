import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Community from "./sections/Community";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MasstimesAndEvents from "./sections/MasstimesAndEvents";
import NewsletterAndSupport from "./sections/NewsletterAndSupport";
import QuickActions from "./sections/QuickActions";
import WelcomeMessage from "./sections/WelcomeMessage";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleStroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleStroll);

    return () => window.removeEventListener("scroll", handleStroll);
  }, []);

  return (
    <>
      {showButton && (
        <div className="fixed bottom-0 right-0 m-5 md:m-10">
          <a
            href="#home"
            className="flex items-center justify-center w-8 h-8  md:w-15 md:h-15 bg-primary hover:bg-primary-dark 
          border border-btn-secondary cursor-pointer text-white rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </div>
      )}

      <section id="navbar">
        <Navbar />
      </section>
      <section id="home">
        <Hero />
      </section>
      <section id="quick-actions">
        <QuickActions />
      </section>
      <section id="about">
        <WelcomeMessage />
      </section>
      <section id="masstimes-and-events">
        <MasstimesAndEvents />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="newsletter-and-support">
        <NewsletterAndSupport />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
