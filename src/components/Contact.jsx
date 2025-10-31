import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Kontaktujte mě
      </h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-md mx-auto flex flex-col gap-4 px-12 md:px-0"
      >
        <input
          type="hidden"
          name="access_key"
          value="7270f10c-3e66-46d8-a565-24e719c48bc3"
        />

        <input
          type="text"
          name="name"
          placeholder="Vaše jméno"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Váš e-mail"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Zpráva"
          required
          className="px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-slate-200 focus:outline-none focus:border-indigo-500"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-indigo-500/30"
        >
          Odeslat zprávu
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
