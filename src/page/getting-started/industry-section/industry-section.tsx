import React, { FC } from "react";

const IndustriesSection: FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
      <p className="mb-6">
        Korvol’s e-commerce services cater to a diverse range of industries.
        Whether you’re selling clothing, electronics, or automotive parts, we’ve
        got you covered.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <p>Apparel & Fashion</p>
        <p>Footwear</p>
        <p>Jewelry & Accessories</p>
        <p>Beauty & Personal Care</p>
        <p>Home & Furniture</p>
        <p>Electronics & Gadgets</p>
        <p>Food & Beverages</p>
        <p>Books & Stationery</p>
        <p>Health & Fitness</p>
        <p>Toys & Baby Products</p>
        <p>Pet Supplies</p>
        <p>Automotive Parts & Accessories</p>
        <p>Gift Shops</p>
        <p>Outdoor & Adventure Gear</p>
        <p>Medical Supplies</p>
      </div>
    </section>
  );
};

export default IndustriesSection;
