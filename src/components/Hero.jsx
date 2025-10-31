import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-8xl font-[outfit] font-bold text-white mb-4"
      >
        Jan Novák
      </motion.h1>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-[outfit] font-bold text-indigo-400 mb-6"
      >
        Frontend Developer & UI Designer
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-slate-300 mb-10 font-[outfit] font-bold"
      >
        Pomáhám přetvářet nápady do funkčních a moderních webových stránek.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        href="#contact"
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-[outfit] font-bold shadow-lg shadow-indigo-500/30 transition-all"
      >
        Kontaktujte mě
      </motion.a>
    </section>
  );
}

export default Hero;