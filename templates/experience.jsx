"use client";
import React from "react";



export default function Experience() {
  
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Embassy Community Experiences
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search experiences by embassy name..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Experience Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Share Your Embassy Experience
        </h2>
        <form>
          <input
            className="w-full mb-4 p-4 border rounded-md"
            placeholder="Embassy Name (e.g., Embassy of Country XYZ)"
            type="text"
          />
          <textarea
            className="w-full h-32 p-4 border rounded-md mb-4"
            placeholder="Describe your experience..."
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-6 rounded-md font-semibold"
          >
            Submit Experience
          </button>
        </form>
      </div>

      {/* Experiences Feed */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Static Experience Post */}
        <div className="bg-white shadow-md rounded-lg p-6 border space-y-4">
          <div className="flex items-center space-x-4 mb-2">
            <div className="font-semibold text-lg">John Doe</div>
            <div className="text-gray-500 text-sm">Embassy of Country XYZ</div>
          </div>
          <p className="text-gray-800">
            Had a smooth experience at the embassy. The staff were friendly, and
            the process was efficient.
          </p>
          <p className="text-gray-400 text-sm">Posted on 2024-11-10</p>

          {/* Comments Section */}
          <div className="border-t pt-4 space-y-4">
            <h4 className="font-semibold text-gray-600">Comments</h4>

            {/* Static Comment */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-sm text-primary">
                  Jane Doe
                </div>
                <p className="text-gray-600 text-sm">
                  I had a similar experience, they were very professional!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-sm">User123</div>
                <p className="text-gray-600 text-sm">
                  Thanks for sharing, this is helpful!
                </p>
              </div>
            </div>

            {/* Comment Input */}
            <div className="mt-4">
              <textarea
                className="w-full h-20 p-4 border rounded-md"
                placeholder="Add your comment..."
              />
              <button className="mt-2 bg-primary text-white py-2 px-4 rounded-md font-semibold">
                Add Comment
              </button>
            </div>
          </div>
        </div>

        {/* Additional Example Experience Post */}
        <div className="bg-white shadow-md rounded-lg p-6 border space-y-4">
          <div className="flex items-center space-x-4 mb-2">
            <div className="font-semibold text-lg">Alice Green</div>
            <div className="text-gray-500 text-sm">Embassy of Country ABC</div>
          </div>
          <p className="text-gray-800">
            The wait time was long, but the staff was helpful once my turn came
            up.
          </p>
          <p className="text-gray-400 text-sm">Posted on 2024-11-08</p>

          {/* Comments Section */}
          <div className="border-t pt-4 space-y-4">
            <h4 className="font-semibold text-gray-600">Comments</h4>

            {/* Static Comment */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-sm">Traveler2024</div>
                <p className="text-gray-600 text-sm">
                  I wish they could improve on the wait times!
                </p>
              </div>
            </div>

            {/* Comment Input */}
            <div className="mt-4">
              <textarea
                className="w-full h-20 p-4 border rounded-md"
                placeholder="Add your comment..."
              />
              <button className="mt-2 bg-primary text-white py-2 px-4 rounded-md font-semibold">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
