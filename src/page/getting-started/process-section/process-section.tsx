import React, { FC } from "react";

const ProcessSection: FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Consultation</h3>
          <p>
            We discuss your business idea and tailor a complete e-commerce
            solution to fit your needs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Store Setup</h3>
          <p>
            We design and launch your online store, handling everything from
            inventory to payments.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Marketing</h3>
          <p>
            We create marketing campaigns on Google Ads and social media to
            drive traffic and sales.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Support & Growth</h3>
          <p>
            Your store goes live, and we provide ongoing support to help you
            grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
