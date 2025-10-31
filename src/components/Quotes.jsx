import { motion } from "framer-motion";

const Quotes = () => {
  const quotes = [
    {
      text: "„Spolupráce s Honzou byla naprosto skvělá. Precizní práce a profesionální přístup.“",
      author: "Petra Svobodová – Marketing Specialist",
    },
    {
      text: "„Díky jeho webu se nám výrazně zvýšila konverze. Rychlý, moderní a přehledný.“",
      author: "Tomáš Dvořák – CEO TechGrow",
    },
    {
      text: "„Má cit pro detail a estetiku, výsledek předčil očekávání.“",
      author: "Lenka Horáková – Freelancer",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
        Co říkají klienti
      </h2>

      <div className="flex flex-col lg:flex-row overflow-x-auto gap-6 px-6 snap-x scrollbar-hide justify-center items-center">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className="snap-center min-w-[300px] max-w-sm bg-neutral-800 border border-neutral-700 text-slate-200 p-6 rounded-lg shadow-md flex flex-col justify-between hover:border-indigo-500 transition: duration-300"
          >
            <p className="italic mb-4">{q.text}</p>
            <span className="text-sm text-slate-400">{q.author}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
