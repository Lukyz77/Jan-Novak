import { motion } from "framer-motion";
import Logo from "../assets/Favicon.png";

const Navbar = () => {
  const navLinks = ["Domů", "Služby", "Projekty", "Proces", "Kontakt"];
  const linkHrefs = ["#hero", "#services", "#projects", "#process", "#contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-neutral-900/70 backdrop-blur-lg border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex">
          <img src={ Logo } alt="logo" className="w-10 h-10" />

          <h1 className="text-2xl font-bold py-2 px-5">Jan Novák</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link, index) => (
            <a
              href={linkHrefs[index]}
              key={link}
              className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
            >
              {link}
            </a>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Kontaktuj mě
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
