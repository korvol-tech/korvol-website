import React, { FC } from "react";

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
      <form className="max-w-lg mx-auto">
        <input
          className="w-full p-4 mb-4 rounded-lg text-black"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full p-4 mb-4 rounded-lg text-black"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="w-full p-4 mb-4 rounded-lg text-black"
          placeholder="Message"
          rows={5}
        />
        <button className="bg-blue-500 py-3 px-6 rounded-lg text-lg">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
