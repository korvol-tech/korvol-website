import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TranscriptScrollSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-white text-center">
      <div ref={ref} className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-black"
        >
          Want to Sell Online but Unsure of the Next Steps?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg mb-6"
        >
          Korvol offers everything you need to get started—from creating your
          online store to managing logistics, payments, and marketing.
        </motion.p>
      </div>
    </section>
  );
}

export default TranscriptScrollSection;
