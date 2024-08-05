import { Link } from "react-router-dom";
import { DefaultProps } from "../App";

type NavItem = {
  name: string;
  to: string;
};

const NAV_ITEMS = new Array<NavItem>(
  ...[
    { name: "About", to: "/" },
    { name: "Resume", to: "/resume" },
    // { name: "Projects", to: "/projects" },
  ]
);

export default function Header({ theme }: DefaultProps) {
  return (
    <header className={theme}>
      <h1 className={theme}>Evan Van Cotthem</h1>
      <nav className={theme}>
        {NAV_ITEMS.map((navItem: NavItem) => {
          return (
            <>
              <Link className={theme} to={navItem.to} key={navItem.to}>
                {navItem.name}
              </Link>
              {theme === "pnw" &&
                navItem != NAV_ITEMS[NAV_ITEMS.length - 1] && (
                  <img
                    src="../public/pinecone.png"
                    height="40px"
                    alt="pinecone"
                  />
                )}
            </>
          );
        })}
      </nav>
    </header>
  );
}
