import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-neutral-950 text-slate-100 font-[Poppins] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  )
}

export default App