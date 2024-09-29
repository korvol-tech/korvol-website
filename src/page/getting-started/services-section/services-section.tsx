import React, { FC } from "react";

const ServicesSection: FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
      <div className="flex flex-wrap justify-center space-x-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">E-Commerce Store Setup</h3>
          <p>
            We create fully functional Shopify stores to get your business
            online fast.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
          <p>We drive traffic with SEO, SEM, and social media strategies.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">
            Inventory & Payment Setup
          </h3>
          <p>
            Manage your stock and payments seamlessly with our setup solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
