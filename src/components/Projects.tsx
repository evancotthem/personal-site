interface ProjectProps {
  theme: string;
}

export default function Projects({ theme }: ProjectProps) {
  return (
    <main className={theme}>
      <section className={theme}>
        <h2 className={theme}>Projects</h2>
        <p className={theme}>Coming soon!</p>
      </section>
    </main>
  );
}
