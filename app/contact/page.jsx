// pages/contact.js

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get in Touch</h1>
      <p className="text-center text-gray-600 max-w-lg mx-auto mb-8">
        Whether you have a question, feedback, or simply want to say hello, we’d love to hear from you! Fill out the form below or reach out directly.
      </p>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="bg-gray-100 rounded-lg shadow-md p-8 mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Information</h2>
        <div className="flex flex-col items-center space-y-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-primary" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-primary" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>123 Main St, City, Country</span>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8 text-gray-600">
        <a href="#" className="text-2xl hover:text-primary transition">
          <FaFacebook />
        </a>
        <a href="#" className="text-2xl hover:text-primary transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-2xl hover:text-primary transition">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
