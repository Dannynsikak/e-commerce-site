import React, { useState } from "react";
import { Frame48 } from "../imgs";
import SummarySection from "./SummarySection";

const CheckoutForm: React.FC = () => {
  // State management for form inputs
  const [formData, setFormData] = useState({
    email: "",
    country: "Nigeria",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zipCode: "",
    address: "",
    cardNumber: "",
    cvv: "",
    validUntil: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend API
    console.log(formData);
  };

  return (
    <div className="w-[95%] m-[0_auto]">
      <div className="space-y-10 md:flex md:*:flex-1 gap-5">
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-white rounded-lg shadow-lg"
        >
          {/* User Details */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">Your details</h2>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 mt-2 rounded"
            />
          </div>
          {/* Delivery Section */}
          <h2 className="text-lg font-bold">Delivery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="country" className="block font-medium">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Nigeria">Nigeria</option>{" "}
                <option value="Cameroon">Cameroon</option>{" "}
                <option value="Algeria">Algeria</option>
                {/* Add more countries here if needed */}
              </select>
            </div>
            <div>
              <label htmlFor="firstName" className="block font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Port Harcourt">Port Harcourt</option>
                {/* Add more cities here if needed */}
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block font-medium">
                State
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Rivers State">Rivers State</option>
                {/* Add more states here if needed */}
              </select>
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                placeholder="12345"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="5 Gra Road, Akwaibom State"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* Payment Section */}
          <h2 className="text-lg font-bold">Payment</h2>
          <p className="mb-4 text-sm">
            All transactions are secure and encrypted
          </p>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block font-medium">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="cvv" className="block font-medium">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="validUntil" className="block font-medium">
                Valid Until
              </label>
              <input
                type="text"
                name="validUntil"
                placeholder="05/25"
                value={formData.validUntil}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                placeholder="12345"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          {/* Submit Button */}
        </form>
        <div>
          <div>
            <img
              src={Frame48}
              alt="A shoe"
              className="inline-block w-[223px] h-[214px] m-w-[100%]"
            />
          </div>
          <div>
            <SummarySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
