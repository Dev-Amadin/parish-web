import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MasstimesAndEvents from "./sections/MasstimesAndEvents";
import QuickActions from "./sections/QuickActions";
import WelcomeMessage from "./sections/WelcomeMessage";

function App() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="quick-actions">
        <QuickActions />
      </section>
      <section id="welcome-message">
        <WelcomeMessage />
      </section>
      <section id="masstimes-and-events">
        <MasstimesAndEvents />
      </section>
    </>
  );
}

export default App;
