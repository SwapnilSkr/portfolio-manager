"use client";

import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          Optimize your website using the
          <span className="text-green-500"> Admin Dashboard</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Currently you have access to edit the website information about the
          services, expertise, chambers. More will be added as per the
          requirements.
        </p>
      </div>
      <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <Link
          href="dashboard/expertise"
          className="px-10 py-3.5 w-full bg-green-500 hover:bg-green-700 active:bg-green-900 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
