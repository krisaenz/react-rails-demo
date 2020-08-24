import React, { useState } from "react";
import Wizard from "./Wizard";
import Header from "../components/BasicPage/Header";
import Content from "./BasicPage/Content";
import Title from "./BasicPage/Title";

export default () => {
  const [headerColor, setHeaderColor] = useState(0);      // Header css state
  const [titleColor, setTitleColor] = useState(0);        // Title css state
  const [contentColor, setContentColor] = useState(0);    // Paragraph css state

  return(
    <div>
      <Header />
      <Title />
      <Content />
      <Wizard />
    </div>
  );
}
