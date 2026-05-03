import Image from "next/image";

const projects = [
  {
    title: "eBike Controller",
    stack: "Verilog, SystemVerilog, Digital Design, FPGA",
    github: "https://github.com/nachiketkerai1/eBike-controller-ece551",
    bullets: [
      "Designed and implemented a complete digital controller for a brushless DC motor eBike system using SystemVerilog",
      "Developed a comprehensive testbench verifying SPI interfaces, cadence simulation, torque seeding, and low-battery thresholds",
    ],
  },
  {
    title: "RISC-V Pipelined Processor",
    stack: "Verilog, Computer Architecture",
    github: "https://github.com/nachiketkerai1/ECE552-Project3",
    bullets: [
      "Designed a 5-stage pipelined 32-bit RISC-V processor with hazard detection, data forwarding, and branch prediction",
      "Implemented instruction decoder for 6 formats (R/I/S/B/U/J-type) supporting 37 RV32I instructions",
      "Developed pipeline control logic with stall/flush mechanisms for control hazards",
    ],
  },
  {
    title: "GPU-Accelerated NLOS Image Reconstruction",
    stack: "Python, CuPy, CUDA, SLURM, NumPy",
    github: "https://github.com/nachiketkerai1/NLOS-python-implementation",
    bullets: [
      "Accelerated a Non-Line-of-Sight (NLOS) image reconstruction algorithm by porting computationally intensive operations (FFTs, convolutions) from NumPy to CuPy",
      "Leveraged CUDA based GPU parallelization by writing SLURM scripts to manage and execute batch jobs on a high-performance computing (HPC) cluster",
    ],
  },
  {
    title: "Press-your-Luck Embedded Game",
    stack: "C, freeRTOS, ARM Cortex-M, I2C, UART",
    github: "https://github.com/nachiketkerai1/PressYourLuck-ARM-Cortex-M",
    bullets: [
      "Programmed bare-metal device drivers and firmware for an I2C LCD and GPIO peripherals (joystick, buttons) on an ARM Cortex-M microcontroller",
      "Implemented freeRTOS task scheduling with priority queues for game logic, display updates, and user input handling",
    ],
  },
  {
    title: "StayWellNYC",
    stack: "Node.js, Express.js, MySQL, HTML/CSS",
    github: "https://github.com/nachiketkerai1/StayWellNYC",
    bullets: [
      "Engineered a full-stack web application using Node.js and Express.js to query a MySQL database and find NYC properties based on filters like borough, guest count, and rating",
      "Implemented backend routes to handle GET/POST requests for submitting reviews, viewing all properties for a specific host, and registering/viewing previous renters for a listing",
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
