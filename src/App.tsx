import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeNav from "./components/ThemeNav";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./css/css.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "raw");

  function handleThemeClick(theme: string) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  return (
    <body className={theme}>
      <Router>
        <ThemeNav onClick={handleThemeClick} />
        <Header theme={theme} />
        <Routes>
          <Route path="/" element={<About theme={theme} />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </body>
  );
}
