import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <div className="header">
      <h1 className="font-serif text-5xl p-8 text-center text-yellow-800">Food Recipes</h1>
    </div>
    <section>
      <p>
        A curated list of recipes for the best homemade meal and delicacies.
      </p>
      <hr />
      <Link to="/recipes" role="button">
        View Recipes
      </Link>

      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Button
      </button>

      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Download</span>
      </button>
      <button className="brikit-blue">This is Brikit</button>
    </section>
  </div>
);
