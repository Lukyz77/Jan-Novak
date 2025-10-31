import { motion } from "framer-motion";
import Logo from '../assets/Favicon.png'

const Navbar = () => {
  const links = ["O mně", "Portfolio", "Reference"];
  const linkHrefs = ["#about", "#portfolio", "#quotes"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed w-full top-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={ Logo } alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-[outfit] font-bold tracking-wide">Jan Novák</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-md font-[outfit] font-bold">
          {links.map((link, index) => (
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
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-[outfit] font-bold"
        >
          Kontaktuj mě
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;