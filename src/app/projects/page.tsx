import Image from "next/image";

const projects = [
  {
    title: "eBike Controller",
    stack: "Verilog, SystemVerilog, Digital Design, FPGA",
    github: "https://github.com/nachiketkerai1/eBike-controller-ece551",
    bullets: [
      "Designed and implemented a complete digital controller for a brushless DC motor eBike system using SystemVerilog.",
      "Built a comprehensive testbench covering SPI interfaces, cadence simulation, torque seeding, and low-battery thresholds.",
    ],
  },
  {
    title: "RISC-V Pipelined Processor",
    stack: "Verilog, Computer Architecture",
    github: "https://github.com/nachiketkerai1/ECE552-Project3",
    bullets: [
      "Designed a 5-stage 32-bit RISC-V processor with hazard detection, data forwarding, branch handling, and stall or flush control.",
      "Implemented an instruction decoder supporting the major RV32I instruction formats.",
      "Developed pipeline control logic for data and control hazards.",
    ],
  },
  {
    title: "GPU-Accelerated NLOS Image Reconstruction",
    stack: "Python, CuPy, CUDA, SLURM, NumPy",
    github: "https://github.com/nachiketkerai1/NLOS-python-implementation",
    bullets: [
      "Accelerated a non-line-of-sight image reconstruction pipeline by porting FFT and convolution-heavy work from NumPy to CuPy.",
      "Used SLURM batch workflows to run the GPU-based pipeline on an HPC cluster.",
    ],
  },
  {
    title: "Press Your Luck Embedded Game",
    stack: "C, freeRTOS, ARM Cortex-M, I2C, UART",
    github: "https://github.com/nachiketkerai1/PressYourLuck-ARM-Cortex-M",
    bullets: [
      "Built firmware and device drivers for an ARM Cortex-M system with joystick, buttons, and LCD peripherals.",
      "Used freeRTOS task scheduling to coordinate game logic, display updates, and input handling.",
    ],
  },
  {
    title: "StayWellNYC",
    stack: "Node.js, Express.js, MySQL, HTML/CSS",
    github: "https://github.com/nachiketkerai1/StayWellNYC",
    bullets: [
      "Built a full-stack web application for exploring NYC properties backed by a MySQL database.",
      "Implemented backend routes for listing filters, host views, renter history, and review submission workflows.",
    ],
  },
  {
    title: "FUSE Filesystem",
    stack: "C, UNIX, Filesystems, RAID",
    github: "https://github.com/nachiketkerai1/FUSE-FS",
    bullets: [
      "Implemented a userspace filesystem with FUSE supporting RAID 0 striping and RAID 1 mirroring.",
      "Built core file and directory operations that reinforced low-level systems and storage concepts.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-stack page-stack-wide">
        <div className="space-y-4 projects-intro">
          <p className="page-kicker">Projects</p>
        </div>
        <div className="feature-grid feature-grid-projects">
          {projects.map((project) => (
            <article key={project.title} className="feature-card project-card">
              <div className="project-card-body">
                <p className="card-kicker">Project</p>
                <h2 className="feature-title">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.title}
                  </a>
                </h2>
                <p className="feature-stack">{project.stack}</p>
                <ul className="feature-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Image
                  src="/contact-icons/github.png"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="project-github-icon"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
