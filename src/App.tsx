import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSelector from "./components/ThemeSelector";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./css/css.css";
// import Projects from "./components/Projects";

/*
const FAVICONS: Record<string, string> = {
  raw: "",
  pnw: "/tree.png",
  // nyc: "/nyc.png",
};
*/

export interface DefaultProps {
  theme: string;
}

export default function App() {
  const [theme, setTheme] = useState(sessionStorage.getItem("theme") || "raw");

  function handleThemeClick(theme: string) {
    sessionStorage.setItem("theme", theme);
    // document
    //   .getElementById("favicon")
    //   ?.setAttribute("href", `${FAVICONS[theme]}`);
    setTheme(theme);
  }

  return (
    <>
      <ThemeSelector theme={theme} onClick={handleThemeClick} />
      <body className={theme}>
        <Router>
          <Header theme={theme} />
          <Routes>
            <Route path="/" element={<About theme={theme} />} />
            <Route path="/resume" element={<Resume theme={theme} />} />
            {/* <Route path="/projects" element={<Projects theme={theme} />} /> */}
          </Routes>
          <Footer theme={theme} />
        </Router>
      </body>
    </>
  );
}
