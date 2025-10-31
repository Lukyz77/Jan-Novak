import { motion } from "framer-motion";
import Portfolio1 from "../assets/Portfolio_1.png";
import Portfolio2 from "../assets/Portfolio_2.png";
import Portfolio3 from "../assets/Portfolio_3.png";
import Portfolio4 from "../assets/Portfolio_4.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio web",
      desc: "Osobní portfolio s přehledem projektů a kontaktním formulářem.",
      img: Portfolio1,
    },
    {
      title: "Aplikační landing page",
      desc: "Vstupní stránka pro mobilní aplikaci.",
      img: Portfolio2,
    },
    {
    title: "Blogová šablona",
    desc: "Moderní responzivní blog s možností filtrování článků.",
    img: Portfolio3,
    },
    {
    title: "Dashboard pro úkoly",
    desc: "Webová aplikace pro správu úkolů.",
    img: Portfolio4,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          Vybrané projekty
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition"
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">{p.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md"
                >
                  Zobrazit
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
