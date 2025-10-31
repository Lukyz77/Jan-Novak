import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-center">
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-white"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}}
        transition={{ duration: 1 }}>
        Kontaktujte mě
      </motion.h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-md mx-auto flex flex-col gap-4 px-12 md:px-0"
      >
        <motion.input
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          type="hidden"
          name="access_key"
          value="7270f10c-3e66-46d8-a565-24e719c48bc3"
        />

        <motion.input
        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          type="text"
          name="name"
          placeholder="Vaše jméno"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        />
        <motion.input
        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          type="email"
          name="email"
          placeholder="Váš e-mail"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        />
        <motion.textarea
        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          name="message"
          rows="5"
          placeholder="Zpráva"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-indigo-500/30"
        >
          Odeslat zprávu
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
