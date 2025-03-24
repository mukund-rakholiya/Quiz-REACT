import React from "react";

import logoImg from "../assets/quiz-logo.png";

// million-ignore
export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
