import { DefaultProps } from "../App";

type Theme = {
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
    /*{
      name: "New York City",
      code: "nyc",
    },
    {
      name: "Cyberpunk",
      code: "cyberpunk",
    },*/
  ]
);

interface ThemeSelectorProps extends DefaultProps {
  onClick: (theme: string) => void;
}

export default function ThemeSelector({ theme, onClick }: ThemeSelectorProps) {
  return (
    <div className={`theme-nav ${theme}`}>
      Themes:
      {THEMES.map((buttonTheme: Theme) => {
        return (
          <button
            onClick={() => {
              onClick(buttonTheme.code);
            }}
            className={buttonTheme.code}
            key={buttonTheme.code}
          >
            {buttonTheme.name}
          </button>
        );
      })}
      and more coming soon...
    </div>
  );
}
