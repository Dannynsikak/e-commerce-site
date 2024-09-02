import React from "react";

const SummarySection: React.FC = () => {
  return (
    <div className="bg-white p-[1em_.5em] rounded-lg shadow-lg space-y-5">
      {/* Product Name */}
      <h2 className="text-lg font-bold border-b pb-2 mb-4">
        Mora's Leather Sandals
      </h2>

      {/* Pricing Details */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">₦40,000</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">₦2,000</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total (2 items)</span>
          <span>₦42,000</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Verve_card_logo.png"
          alt="Verve-card"
          className="w-6 h-6 mr-2"
        />
        <span className="font-medium">Payment method</span>
      </div>
      <button type="submit" className="w-full bg-black text-white p-2 rounded">
        Checkout
      </button>
    </div>
  );
};

export default SummarySection;
