import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeNav from "./components/ThemeNav";
import About from "./components/About";
import Resume from "./components/Resume";
import "./css/css.css";

export type Theme = {
  name: string;
  code: string;
};

const THEMES = new Array<Theme>(
  ...[
    {
      name: "Raw HTML",
      code: "raw",
    },
    {
      name: "Pacific Northwest",
      code: "pnw",
    },
    {
      name: "New York City",
      code: "nyc",
    },
    {
      name: "Cyberpunk",
      code: "cyberpunk",
    },
  ]
);

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "raw");

  function handleThemeClick(theme: string) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  return (
    <Router>
      <body className={theme}>
        <ThemeNav themes={THEMES} onClick={handleThemeClick} />
        <header className={theme}>
          <h1>Evan Van Cotthem - {theme}</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </header>
        <main className={theme}>
          <section>
            <h1 className={theme}>About</h1>
            <p className={theme}>
              I'm a dedicated Software Engineer currently working in frontend
              development with React, Typescript, and GraphQL. My journey in the
              software industry began as a Software Test Engineer focused on
              performance, scalability, and resiliency testing. This experience
              equipped me with a strong foundation in quality assurance,
              ensuring that the software I develop meets the highest standards.
              As my career progressed, I transitioned into the role of a
              Software Development Engineer in Test (SDET), where developing
              test tooling allowed me to build engineering skills by bridging
              the gap between testing and development. This growth led me to
              make the jump to the engineering position I'm in today.
            </p>
          </section>
        </main>
        <Routes>
          <Route path="/" element={<About theme={theme} />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer className={theme}>
          <Link to="https://www.linkedin.com/in/evancotthem">LinkedIn</Link>
          <Link to="https://github.com/evancotthem">GitHub</Link>
          <Link to="https://twitter.com/evancotthem">Twitter</Link>
        </footer>
      </body>
    </Router>
  );
}
