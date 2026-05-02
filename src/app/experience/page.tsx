import Image from "next/image";

const experiences = [
  {
    title: "Graduate Engineer",
    company: "Arm",
    period: "2026 – Present",
    location: "Austin, TX",
    linkedin: "https://www.linkedin.com/company/arm",
    logo: "/company-logos/arm.jpeg",
    bullets: [
      "Currently working as a Graduate Engineer in Austin.",
      "Role continues my path toward chip, architecture, and SoC-oriented engineering work.",
    ],
  },
  {
    title: "Embedded Hardware Engineer",
    company: "Milwaukee Tool",
    period: "January 2026 – March 2026",
    location: "Milwaukee, WI",
    linkedin: "https://www.linkedin.com/company/milwaukee-tool",
    logo: "/company-logos/milwaukee-tool.jpeg",
    bullets: [
      "Programmed and debugged medium and high torque motor control boards in embedded C.",
      "Worked through PWM control strategies for three-phase brushless motors.",
      "Supported safety and reliability testing for motor control systems.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Cribl",
    period: "June 2025 – August 2025",
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/company/cribl",
    logo: "/company-logos/cribl.jpeg",
    bullets: [
      "Designed a distributed Time-to-Live logging feature using TypeScript and Node.js.",
      "Completed product bug fixes involving TypeScript, Node.js, and TLS.",
      "Strengthened backend and systems debugging experience in a production environment.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "Visual Computing Lab @ UW-Madison",
    period: "January 2025 – December 2025",
    location: "Madison, WI",
    linkedin: "https://www.linkedin.com/school/university-of-wisconsin-madison",
    logo: "/company-logos/cdis.jpeg",
    bullets: [
      "Developed Python tooling to convert time-of-flight sensor data into computer vision datasets.",
      "Integrated VL53L0X sensors to improve low-cost robot perception workflows.",
    ],
  },
  {
    title: "Embedded Systems Research Intern",
    company: "Bick Digital Entomology Lab @ UW-Madison",
    period: "May 2024 – May 2025",
    location: "Madison, WI",
    linkedin: "https://www.linkedin.com/school/university-of-wisconsin-madison",
    logo: "/company-logos/wisconsin.jpeg",
    bullets: [
      "Built an ESP-32 based agricultural monitoring device with VL53L0X sensing over I2C.",
      "Developed C++ firmware and Python analysis code for insect biomarker research.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="page-shell">
      <div className="page-stack page-stack-wide">
        <div className="space-y-4">
          <p className="page-kicker">Experience</p>
        </div>
        <div className="feature-grid feature-grid-experience">
          {experiences.map((experience) => (
            <article key={experience.title} className="feature-card">
              <div className="experience-header">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo"
                  width={120}
                  height={48}
                  unoptimized
                />
                <div className="experience-header-copy">
                  <a
                    href={experience.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="company-link company-link-title"
                  >
                    {experience.company}
                  </a>
                </div>
              </div>
              <h2 className="feature-title">{experience.title}</h2>
              <p className="feature-stack">{experience.period}</p>
              <p className="feature-meta">{experience.location}</p>
              <ul className="feature-bullets">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
