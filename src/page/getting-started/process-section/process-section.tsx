import React, { FC } from "react";

const ProcessSection: FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Consultation</h3>
          <p>
            We discuss your business goals and customize a solution for you.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Store Setup</h3>
          <p>We build and launch your online store with everything you need.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Marketing</h3>
          <p>We create marketing campaigns that bring you traffic and sales.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Launch & Support</h3>
          <p>
            Your store goes live, and we provide ongoing support to help you
            grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
