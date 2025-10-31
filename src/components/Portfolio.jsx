import { motion } from "framer-motion";
import Portfolio1 from '../assets/Portfolio_1.png'
import Portfolio2 from '../assets/Portfolio_2.png'
import Portfolio3 from '../assets/Portfolio_3.png'
import Portfolio4 from '../assets/Portfolio_4.png'

const projects = [
  {
    title: "Portfolio web",
    desc: "Osobní portfolio s přehledem projektů a kontaktním formulářem.",
    img: Portfolio1 ,
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

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <h2 className="text-3xl md:text-5xl font-[outfit] font-bold text-center mb-12 text-white">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-indigo-500 transition-colors"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-[outfit] font-bold mb-2 text-indigo-400">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4 font-[outfit] font-bold">{project.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md font-[outfit] font-bold"
              >
                Zobrazit
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;