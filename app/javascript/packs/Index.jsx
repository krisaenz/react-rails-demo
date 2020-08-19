import React from "react";
import { render } from "react-dom";
import $ from 'jquery';
import App from "../components/App";

// Tailwind CSS
import "../../assets/stylesheets/application";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
