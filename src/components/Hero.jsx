import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4 uppercase"
      >
        Tvořím <span className="text-indigo-400">moderní weby</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-xl text-slate-300 mb-8"
      >
        Pomáhám firmám a jednotlivcům vytvářet digitální prezentace, které nejen
        vypadají skvěle, ale i fungují.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4}}
        href="#portfolio"
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/30"
      >
        Zobrazit projekty
      </motion.a>
    </section>
  );
};

export default Hero;
