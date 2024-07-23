import { Theme } from "../Home";

interface ThemeNavProps {
  themes: Array<Theme>;
  onClick: (theme: string) => void;
}

export default function ThemeNav({ themes, onClick }: ThemeNavProps) {
  return (
    <>
      {themes.map((theme: Theme) => {
        return (
          <button
            onClick={() => {
              onClick(theme.code);
            }}
            className={theme.code}
          >
            {theme.name}
          </button>
        );
      })}
    </>
  );
}
