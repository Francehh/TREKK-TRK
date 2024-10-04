import React from "react";

function Home() {
  return (
    <section className="text-center p-8 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4">Welcome to TREKK</h2>
      <p className="text-lg mb-4 text-gray-700">
        Revolutionize your travel experience. Explore landmarks, support local businesses, and earn rewards with TRK Tokens.
      </p>
      <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600">
        Get Started
      </button>
    </section>
  );
}

export default Home;