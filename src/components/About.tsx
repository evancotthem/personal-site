import { DefaultProps } from "../App";

const THEME_DESCRIPTIONS: Record<string, string> = {
  raw: "Except this one. It's just bare bones.",
  pnw: "This one is for my love of the woods and mountains of home.",
  nyc: "This one is for my love of The City.",
};

export default function About({ theme }: DefaultProps) {
  return (
    <main className={theme}>
      <section className={theme}>
        <h2 className={theme}>About</h2>
        <p className={theme}>Hi, I'm Evan!</p>
        <p className={theme}>
          Professionally, I work as a software engineer with experience across
          the stack. Unprofessionally, I enjoy hiking, climbing, gaming, and
          learning new skills.
        </p>
        <p className={theme}>
          I was born and raised in the Seattle area, but I currently live in New
          York City.
        </p>
        <p className={theme}>
          Each of the buttons at the top are themes that represent a different
          part of my life. {THEME_DESCRIPTIONS[theme]}
        </p>
      </section>
    </main>
  );
}
