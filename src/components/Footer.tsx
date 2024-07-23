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
    { name: "LinkedIn", to: "https://www.linkedin.com/in/evancotthem" },
    { name: "GitHub", to: "https://github.com/evancotthem" },
    { name: "Twitter", to: "https://twitter.com/evancotthem" },
  ]
);

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className={theme}>
      {SOCIALS.map((social: Social) => {
        return (
          <Link className={theme} to={social.to} key={social.to}>
            {social.name}
          </Link>
        );
      })}
    </footer>
  );
}
