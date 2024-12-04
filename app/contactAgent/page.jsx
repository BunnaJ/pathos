// pages/contact-agent.js

export default function ContactAgent() {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-slate-600 mb-4 text-center">Contact Agent</h1>
          <p className="text-gray-700 text-center mb-10">
            Fill out the form below to get in touch with a verified agent. They will respond to you as soon as possible.
          </p>
        
          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
  
            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-600 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Describe your needs or ask a question..."
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-primary rounded hover:bg-blue-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  