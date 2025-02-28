import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact-container py-12 px-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
      <p className="text-white mb-6">
        Have any questions? Feel free to reach out to us!
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full rounded-lg px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full rounded-lg px-4 py-2"
          rows="4"
        ></textarea>
        <motion.button
          className="btn btn-primary w-full py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
