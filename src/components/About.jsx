import { motion } from "framer-motion";


const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-neutral-950 to-neutral-900 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* === LEFT SIDE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1}}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto rounded-2xl overflow-hidden ring-2 ring-indigo-600 shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)]">
            <img
              src=""
              alt="Jan Novák"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>

        {/* === RIGHT SIDE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3}}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[Outfit]">
            O&nbsp;mně
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0 font-[Outfit]">
            Jsem <span className="text-indigo-400 font-semibold">frontend developer</span> 
            se zaměřením na tvorbu moderních webových stránek a uživatelských rozhraní. 
            Miluju kombinaci designu a kódu – od prvního návrhu až po finální implementaci.
          </p>

          <p className="text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 font-[Outfit]">
            V práci kladu důraz na čistý kód, jednoduchost a přehlednost. 
            Neustále se učím nové technologie a baví mě posouvat věci na vyšší úroveň.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5}}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {["Figma", "HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js"].map(
              (skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-md font-[Outfit] font-semibold text-slate-300 hover:text-indigo-400 hover:border-indigo-500 transition"
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* === DECORATIVE BACKGROUND GLOW === */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),_transparent_70%)]"></div>
    </section>
  );
}
 export default About;