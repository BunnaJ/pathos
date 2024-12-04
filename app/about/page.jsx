// pages/about.js

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-4">About Pathos Embassy</h1>
        <p className="text-lg text-gray-700">
          Pathos Embassy is dedicated to providing trusted, accessible, and transparent resources for travelers navigating embassy processes worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-white rounded-lg shadow-lg p-10 mb-12 mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold  mb-6 text-center">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          To simplify visa applications, reduce misinformation, and foster a supportive community of global travelers. Pathos Embassy aims to empower users with accurate information, verified agents, and a platform for sharing real experiences.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-primary mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Value Cards */}
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Transparency</h3>
            <p className="text-gray-700">
              We provide clear, accurate information, helping users navigate embassy and visa processes with confidence.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Community Support</h3>
            <p className="text-gray-700">
              We foster a supportive environment for users to share their experiences, creating a collaborative community.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Reliability</h3>
            <p className="text-gray-700">
              We ensure trustworthy, user-verified information that travelers can rely on for planning and applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
