import { motion } from "framer-motion";
import { Code2, Palette, Layers } from "lucide-react";

const Services = () => {
  const items = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      title: "Frontend Development",
      desc: "Moderní, responzivní a rychlé webové aplikace postavené na Reactu a Tailwind CSS.",
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-400" />,
      title: "UI / UX Design",
      desc: "Estetické, přehledné a funkční návrhy vytvořené s důrazem na uživatelský zážitek.",
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
      title: "Branding & Web Identity",
      desc: "Pomáhám vytvořit vizuální styl, který ladí s osobností značky a působí profesionálně.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          Co nabízím
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-indigo-500/20 transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
