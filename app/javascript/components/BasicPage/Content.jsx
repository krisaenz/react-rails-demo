import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Content() {
    return(
        <section className="p-3 m-2">
            <p> A curated list of recipes for the best homemade meal and delicacies. </p>
            <hr />
            <Link to="/recipes"> View Recipes </Link>
        </section>
    )
}

export default Content;