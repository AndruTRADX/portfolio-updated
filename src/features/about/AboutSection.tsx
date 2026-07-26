const AboutSection = () => {
  const yearsOfExp: number =
    new Date().getFullYear() - new Date("2025-01-01").getFullYear();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex-col flex max-xmd:px-2 justify-between gap-4 pt-14"
    >
      <h2 id="about-heading" className="subtitle-p-1 mt-2">About Me</h2>

      <p className="text-p-1">
        Hi there! I'm Andrés Rodriguez, a <span className="text-p-1-focus">software developer</span>,
        proudly Colombian.
      </p>

      <p className="text-p-1">
        I have {yearsOfExp} years of experience working as a
        web developer and{" "}
        <span className="text-p-1-focus">full stack developer</span>, with the
        full Microsoft suite <span className="text-p-1-focus">.NET</span> and{" "}
        <span className="text-p-1-focus">SQL Server</span> as well as extensive
        experience with <span className="text-p-1-focus">React</span>. I also
        have hands-on experience in database normalization and{" "}
        <span className="text-p-1-focus">software architecture</span>, with a
        strong focus on scalability, robustness, and performance, without losing
        sight of code quality and maintainability.
      </p>

      <p className="text-p-1">
        My journey as a developer began in 2022, when I fell in love with
        software development, and I've kept exploring and learning ever since.
        I'm someone who never gets tired of learning, always staying current to
        keep pace with what the industry demands.
      </p>
    </section>
  );
};

export default AboutSection;
