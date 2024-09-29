import React, { FC } from "react";

const ServicesSection: FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
      <p className="mb-6">
        From creating your online store, managing inventory, setting up
        logistics and delivery, to handling customer orders and marketing on
        platforms like Google Ads and social media—Korvol provides everything
        you need to grow your business online.
      </p>
      <div className="flex flex-wrap justify-center space-x-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Online Store Setup</h3>
          <p>
            We create functional and visually appealing Shopify stores to get
            you started.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Inventory & Logistics</h3>
          <p>
            Streamline your inventory, logistics, and delivery processes with
            ease.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Marketing & Sales</h3>
          <p>
            Drive traffic with targeted marketing campaigns on Google, Facebook,
            and more.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-2xl font-semibold mb-4">Industries We Serve</h4>
        <p>
          Apparel, Electronics, Health & Beauty, Food, Home Goods, and many
          more!
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
