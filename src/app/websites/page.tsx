import Link from "next/link";
import ScrollAnimator from "../scroll-animator";

const websites = [
  {
    name: "Statement Desk",
    url: "https://statementdesk.com?utm_source=portfolio&utm_medium=websites&utm_campaign=statementdesk",
    description: "PDF bank statement converter for accountants.",
    tags: ["Next.js", "Supabase"],
    status: "Live",
  },
  {
    name: "Genscript",
    url: "https://genscript.io?utm_source=portfolio&utm_medium=websites&utm_campaign=genscript",
    description: "AI-powered YouTube script generation.",
    tags: ["Next.js", "Supabase"],
    status: "Live",
  },
];

export default function Websites() {
  return (
    <div className="container">
      {/* Header */}
      <header className="site-header fade-up">
        <Link href="/" className="back-link">
          &larr; dominickhill.com
        </Link>
      </header>

      {/* Intro */}
      <div className="card websites-intro fade-up">
        <h1>Websites</h1>
        <p className="websites-subtitle">
          A collection of websites and web apps I&apos;ve built for clients.
        </p>
      </div>

      {/* Website Cards */}
      {websites.map((site) => (
        <a
          key={site.name}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <div className="card website-card fade-up">
            <div className="project-label">Website</div>
            <h3>{site.name}</h3>
            <div className="tagline">{site.description}</div>
            <div className="badge-row">
              <span className="badge badge-live">{site.status}</span>
              {site.tags.map((tag) => (
                <span key={tag} className="badge badge-tech">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}

      {/* CTA */}
      <div className="card hire-card fade-up">
        <h2>Need a website?</h2>
        <div className="description">
          Let&apos;s build something great together.
        </div>
        <a href="mailto:dominickjerell@gmail.com" className="hire-cta">
          Get in touch &rarr;
        </a>
      </div>

      {/* Footer */}
      <footer className="footer fade-up">
        <div className="footer-tagline">Built with caffeine and Claude.</div>
        <div className="footer-copy">
          &copy; 2026 Dominick Hill. All rights reserved.
        </div>
      </footer>

      <ScrollAnimator />
    </div>
  );
}
