const technologySections = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "TypeScript", "SystemVerilog", "Verilog"],
  },
  {
    title: "Technologies",
    items: ["freeRTOS", "Node.js", "UNIX", "MySQL", "ROS2"],
  },
  {
    title: "Design and Verification Tools",
    items: ["Quartus Prime", "ModelSim", "Altium", "IAR"],
  },
  {
    title: "Compute and Workflow Tools",
    items: ["Git", "Bash", "CUDA", "CuPy", "SLURM", "Oscilloscope", "Picoscope"],
  },
];

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="page-stack page-stack-wide">
        <div className="space-y-4 about-intro">
          <p className="page-kicker">Tech Stack</p>
          <h1 className="page-title">Technologies and tools.</h1>
        </div>
        <div className="tech-sections">
          {technologySections.map((section) => (
            <section key={section.title} className="tech-section-card">
              <h2 className="mini-heading">{section.title}</h2>
              <div className="tech-grid">
                {section.items.map((technology) => (
                  <div key={technology} className="tech-chip">
                    {technology}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
