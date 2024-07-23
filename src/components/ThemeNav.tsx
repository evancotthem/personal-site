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

interface ThemeNavProps {
  onClick: (theme: string) => void;
}

export default function ThemeNav({ onClick }: ThemeNavProps) {
  return (
    <>
      {THEMES.map((theme: Theme) => {
        return (
          <button
            onClick={() => {
              onClick(theme.code);
            }}
            className={theme.code}
            key={theme.code}
          >
            {theme.name}
          </button>
        );
      })}
    </>
  );
}
