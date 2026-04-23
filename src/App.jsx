import { NavLink, Route, Routes } from "react-router-dom";
import portrait from "./assets/portfolio-portrait.png";
import { profile } from "./data/profile.js";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.1-3.4-1.1-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.8 9.8 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#/">
          <span>{profile.initials}</span>
          <strong>{profile.name}</strong>
        </a>
        <nav aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="intro">{profile.about}</p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="primary-action" href="#/projects">
              View Projects <ArrowIcon />
            </a>
            <a className="icon-action" href={`mailto:${profile.emails.personal}`} title="Send email">
              <MailIcon />
            </a>
            <a className="icon-action" href={profile.github} title="Open GitHub">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Profile picture">
          <img src={portrait} alt={`${profile.name} profile visual`} />
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Research Interests</p>
          <h2>Topics I want to explore deeper</h2>
        </div>
        <div className="interest-grid">
          {profile.researchInterests.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span>{interest.code}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="details-layout">
        <div className="details-block">
          <h2>Details</h2>
          <aside className="details-panel" aria-label="Personal details">
            <Detail label="Name" value={profile.name} />
            <Detail label="Phone" value={profile.phone} />
            <Detail label="Personal Email" value={profile.emails.personal} />
            <Detail label="College Email" value={profile.emails.college} />
            <div className="skill-list" aria-label="Skills">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-page">
      <div className="section-heading">
        <p className="projects-label">Projects</p>
      
      </div>

      <div className="project-grid">
        {profile.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <small>{project.year}</small>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="repo-link" href={project.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default App;
