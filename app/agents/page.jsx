// pages/verified-agents.js
import Link from "next/link";
export default function VerifiedAgents() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Title and Intro */}
        <h1 className="text-4xl font-bold mb-4">Verified Agents</h1>
        <p className="text-lg text-gray-700">
          Find trusted agents to assist with your visa applications. All agents listed here have been verified by Pathos Embassy.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search by location or embassy..."
          className="w-full md:w-1/3 p-3 mb-4 md:mb-0 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <select className="w-full md:w-1/3 p-3 mb-4 md:mb-0 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="americas">Americas</option>
        </select>
        <select className="w-full md:w-1/3 p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Filter by Embassy Type</option>
          <option value="tourist">Tourist Visa</option>
          <option value="student">Student Visa</option>
          <option value="work">Work Visa</option>
        </select>
      </div>

      {/* Agents List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Agent Card */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-primary">John Doe</h2>
          <p className="text-gray-600">Location: Lagos, Nigeria</p>
          <p className="text-gray-600">Specializes in: Work Visa</p>
          <p className="text-gray-600">Rating: ⭐⭐⭐⭐</p>
          <Link href="/contactAgent" >
          <button className="mt-4 w-full p-2 text-white bg-primary rounded hover:bg-green-700 focus:outline-none">
            Contact Agent
          </button>
          </Link>
         
        </div>
        
        {/* Duplicate the above agent card with different info for other agents */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-primary">Jane Smith</h2>
          <p className="text-gray-600">Location: Nairobi, Kenya</p>
          <p className="text-gray-600">Specializes in: Tourist Visa</p>
          <p className="text-gray-600">Rating: ⭐⭐⭐⭐⭐</p>
          <button className="mt-4 w-full p-2 text-white bg-primary rounded hover:bg-green-700 focus:outline-none">
            Contact Agent
          </button>
        </div>

        {/* Add more agent cards as needed */}
      </div>
    </div>
  );
}
