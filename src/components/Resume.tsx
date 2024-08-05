import { DefaultProps } from "../App";

export default function Resume({ theme }: DefaultProps) {
  return (
    <main className={theme}>
      <h2 className={theme}>Resume</h2>
      <section className={theme} id="experience">
        <h3 className={theme}>Experience</h3>
        <h4 className={theme}>Software Engineer, Indeed, 20222-2024</h4>
        <ul className={theme}>
          <li>
            Created the onboarding workflow for linking third-party applicant
            tracking systems to Indeed enabling businesses to manage external
            job postings directly on Indeed's website
          </li>
          <li>
            Implemented a new micro frontend architecture improving the
            reusability of UI components and increasing development speed
          </li>
          <li>
            Led the testing effort for the new micro frontend architecture
            updating and migrating integration and E2E tests to prevent
            regressions and facilitate a seamless rollout
          </li>
          <li>
            Managed CI/CD pipelines ensuring reliable and fast deployment;
            developed unit and integration test suites, integrating them into
            the pipelines, and expanding their scope with the adoption of fuzz
            testing
          </li>
          <li>
            Spearheaded the use of multiple load testing tools for integrating
            into the team's testing processes; designed and executed load and
            performance tests ramping up to 1.5X peak traffic to verify that the
            team's systems could scale to handle expected growth as well as the
            viability of the tools themselves at extreme loads
          </li>
        </ul>
        <h4 className={theme}>Software Engineer, Qualtrics, 2018-2022</h4>
        <ul className={theme}>
          <li>
            Designed, developed, and managed software tooling, microservice
            infrastructure, and a UI that enabled engineers to conduct
            large-scale load and fault injection testing
          </li>
          <li>
            Created a UI, inspired by the Go Playground, that allowed engineers
            to create a test configuration file for any of the load test tools,
            verify that the configuration file would run without error, and save
            the file for use in a distributed load test
          </li>
          <li>
            Created test plans, automated, and managed UI, E2E, and integration
            tests for the team's tools to ensure quality and prevent regressions
          </li>
          <li>
            Analyzed past outage incidents and conducted cross-product fault
            injection tests to determine that the services would respond
            gracefully to unexpected failures before they occurred
          </li>
          <li>
            Organized and led a company-wide resiliency game day simulating
            network disruptions such as latency, packet loss, and connection
            drops. This revealed insufficient alerting across many teams
            prompting improved alert coverage and faster incident detection and
            resolution.
          </li>
          <li>
            Evangelized new tooling and features to engineers and conducted
            training sessions to onboard them to the scale testing ecosystem
          </li>
          <li>
            Coordinated engineering efforts to test platform capacity ensuring
            that the company's infrastructure was equipped to handle projected
            growth
          </li>
        </ul>
      </section>
      <section className={theme} id="skills">
        <h3 className={theme}>Skills</h3>
        <ul className={theme}>
          <b>Languages:</b> Javascript, Typescript, Go, Java, Python
        </ul>
        <ul className={theme}>
          <b>Tech:</b> React, GraphQL, Docker, Jenkins, GitLab CI, TestCafe,
          Playwright, Selenium, AWS (S3, EC2, Lambda)
        </ul>
      </section>
      <section className={theme} id="education">
        <h3 className={theme}>Education</h3>
        <ul className={theme}>
          BS Applied and Computational Mathemetical Sciences, University of
          Washington, 2018
        </ul>
      </section>
    </main>
  );
}
