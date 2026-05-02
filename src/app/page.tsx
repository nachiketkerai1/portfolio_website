import Image from "next/image";

export default function Home() {
  return (
    <section className="landing-shell">
      <div className="landing-grid">
        <div className="landing-main space-y-7">
          <p className="page-kicker">Digital Design • Computer Architecture • SoC Systems</p>
          <div className="landing-intro space-y-4">
            <h1 className="landing-title">Hi, I&apos;m Nachiket Kerai.</h1>
            <p className="landing-copy">
              I graduated from UW-Madison with B.S. degrees in Computer
              Engineering and Computer Science, and I&apos;m focused on digital
              design, computer architecture, and SoC-oriented systems work.
            </p>
          </div>
          <div className="home-contact-row">
            <a href="mailto:nachiket.kerai@gmail.com" className="home-contact-link">
              <span className="home-contact-icon" aria-hidden="true">
                <Image
                  src="/contact-icons/gmail.png"
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                  className="home-contact-icon-image"
                />
              </span>
              <span>nachiket.kerai@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nachiket-kerai-b031431b3/"
              target="_blank"
              rel="noreferrer"
              className="home-contact-link"
            >
              <span className="home-contact-icon" aria-hidden="true">
                <Image
                  src="/contact-icons/linkedin.png"
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                  className="home-contact-icon-image"
                />
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nachiketkerai1"
              target="_blank"
              rel="noreferrer"
              className="home-contact-link"
            >
              <span className="home-contact-icon" aria-hidden="true">
                <Image
                  src="/contact-icons/github.png"
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                  className="home-contact-icon-image"
                />
              </span>
              <span>GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="home-contact-link"
            >
              <span className="home-contact-icon" aria-hidden="true">
                <Image
                  src="/contact-icons/resume.svg"
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                  className="home-contact-icon-image"
                />
              </span>
              <span>Resume</span>
            </a>
          </div>
        </div>
        <div className="profile-card profile-card-home">
          <Image
            src="/Nachiket.jpg"
            alt="Portrait of Nachiket Kerai"
            width={360}
            height={360}
            priority
            className="profile-image"
          />
          <div className="profile-copy">
            <h2 className="mini-heading">Background</h2>
            <div className="info-list">
              <div className="info-pill">
                Education
                <span className="info-pill-detail">
                  B.S. Computer Engineering and B.S. Computer Science
                </span>
              </div>
              <div className="info-pill">
                Graduate Engineering @ Arm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
