import { Link } from "react-router-dom";

type NavItem = {
  name: string;
  to: string;
};

const NAV_ITEMS = new Array<NavItem>(
  ...[
    { name: "Home", to: "/" },
    { name: "Resume", to: "/resume" },
  ]
);

interface HeaderProps {
  theme: string;
}

export default function Header({ theme }: HeaderProps) {
  return (
    <header className={theme}>
      <h1 className={theme}>Evan Van Cotthem</h1>
      <nav className={theme}>
        {NAV_ITEMS.map((navItem: NavItem) => {
          return (
            <Link className={theme} to={navItem.to} key={navItem.to}>
              {navItem.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
