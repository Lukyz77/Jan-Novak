import { motion } from "framer-motion";

const quotes = [
  "„Spolupráce s Honzou byla skvělá.“ — Petra Svobodová",
  "„Díky jeho designu se naši zákazníci lépe orientují.“ — Tomáš Dvořák",
  "„Rychlá a efektivní komunikace.“ — Lenka Horáková",
  "„Moderní a funkční web!“ — Pavel Černý",
];

const Quotes = () => {
  return (
    <section id="quotes" className="py-24 bg-neutral-950">
      <h2 className="text-3xl md:text-5xl font-[outfit] font-bold text-center mb-12 text-white">
        Co říkají klienti
      </h2>
      <div className="flex overflow-x-auto gap-6 px-6 snap-x scrollbar-hide">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className="snap-center min-w-[300px] bg-neutral-800 border border-neutral-700 text-slate-200 p-6 rounded-lg shadow-md font-[outfit] font-bold"
          >
            {q}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Quotes;