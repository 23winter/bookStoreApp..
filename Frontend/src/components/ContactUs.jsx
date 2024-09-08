import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2022/09/16/11/29/telephone-booth-7458438_960_720.jpg')`,
      }}
    >
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Link
        to="/"
        className="absolute top-4 left-4 text-white text-3xl hover:text-yellow-200 transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="relative z-10 max-w-3xl w-full p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <div className="text-center mb-8">
          <p className="text-gray-800">
            We'd love to hear from you! Reach out to us through any of the
            following methods:
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-800">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600" />
              <span>contact@bookstore.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-800">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-indigo-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-800">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-indigo-600"
              />
              <span>123 Book Street, Library City</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
