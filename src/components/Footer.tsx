import { Link } from "react-router-dom";

interface FooterProps {
  theme: string;
}

type Social = {
  name: string;
  to: string;
};

const SOCIALS = new Array<Social>(
  ...[
    { name: "Email", to: "mailto:evancotthem@gmail.com" },
    { name: "LinkedIn", to: "https://www.linkedin.com/in/evancotthem" },
    { name: "GitHub", to: "https://github.com/evancotthem" },
  ]
);

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className={`footer-container ${theme}`}>
      {SOCIALS.map((social: Social) => {
        return (
          <Link className={theme} to={social.to} key={social.to}>
            {social.name}
          </Link>
        );
      })}
      {theme === "pnw" && (
        <a
          className={`${theme} attribution`}
          href="https://www.vecteezy.com/free-png/pine-tree"
        >
          Images by Vecteezy
        </a>
      )}
    </footer>
  );
}
