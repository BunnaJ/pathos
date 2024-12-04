import React from 'react'

// components/LoginForm.jsx
// components/LoginForm.jsx
import Link from 'next/link';

export default function LoginForm() {
  return (
    
    <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md space-y-6 mt-24">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Login to Pathos Embassy</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition duration-150"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{' '}
        <Link href="/register" className="text-blue-500 hover:underline">
          Create an Account
        </Link>
      </p>
    </div>
  );
}
