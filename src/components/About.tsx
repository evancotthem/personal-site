interface AboutProps {
  theme: string;
}

export default function About({ theme }: AboutProps) {
  return (
    <main className={theme}>
      <section>
        <h2 className={theme}>About</h2>
        <p className={theme}>
          I'm a dedicated Software Engineer currently working in frontend
          development with React, Typescript, and GraphQL. My journey in the
          software industry began as a Software Test Engineer focused on
          performance, scalability, and resiliency testing. This experience
          equipped me with a strong foundation in quality assurance, ensuring
          that the software I develop meets the highest standards. As my career
          progressed, I transitioned into the role of a Software Development
          Engineer in Test (SDET), where developing test tooling allowed me to
          build engineering skills by bridging the gap between testing and
          development. This growth led me to make the jump to the engineering
          position I'm in today.
        </p>
      </section>
    </main>
  );
}
