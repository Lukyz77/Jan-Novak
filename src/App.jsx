import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-neutral-950 text-slate-100 font-[Outfit]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
