'use client'
import React from 'react'
import Link from "next/link";


export default function register({handleDataSubmit, isLoadingData, handleChangeData, formDataHandle}) {

  return (
    <>
       <div className="max-w-md mx-auto bg-gray-50  p-8 rounded-lg shadow-md space-y-6 mt-14">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create Your Account
      </h2>
      <form onSubmit={handleDataSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formDataHandle.firstName}
              onChange={handleChangeData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formDataHandle.lastName}
              onChange={handleChangeData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
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
              name="email"
              value={formDataHandle.email}
              onChange={handleChangeData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formDataHandle.password}
              onChange={handleChangeData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formDataHandle.confirmPassword}
              onChange={handleChangeData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-5 bg-primary text-white py-2 rounded-md hover:bg-green-600 transition duration-150"
        >
          {isLoadingData ? 'loading.....' : 'Register'}
        </button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </div>
    </>
  )
}
