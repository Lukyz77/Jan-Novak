import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-7 h-7 text-indigo-400" />,
      title: "1. Konzultace & návrh",
      desc: "Pochopím vaše cíle a společně vytvoříme jasnou strategii a strukturu webu.",
    },
    {
      icon: <PenTool className="w-7 h-7 text-indigo-400" />,
      title: "2. Design & prototyp",
      desc: "Navrhnu čisté a moderní rozhraní v Figmě s důrazem na UX a vizuální identitu.",
    },
    {
      icon: <Code2 className="w-7 h-7 text-indigo-400" />,
      title: "3. Vývoj",
      desc: "Převedu návrh do kódu pomocí Reactu a Tailwindu. Responzivní, rychlé a přehledné.",
    },
    {
      icon: <Rocket className="w-7 h-7 text-indigo-400" />,
      title: "4. Nasazení & podpora",
      desc: "Nasadím projekt online, optimalizuji výkon a pomohu s údržbou.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-neutral-950 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
        Jak pracuji
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition text-slate-300"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
