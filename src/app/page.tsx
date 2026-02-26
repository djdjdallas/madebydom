import Image from "next/image";
import ScrollAnimator from "./scroll-animator";
import NewsletterForm from "./newsletter-form";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="site-header fade-up">
        <span className="name">dominickhill.com</span>
      </header>

      {/* Newsletter / Intro Card */}
      <div className="card newsletter-card fade-up">
        <h2>Code × Create</h2>
        <div className="subtitle">
          Building SaaS products.
          <br />
          Shipping every month.
          <br />
          <span className="accent">Follow the journey.</span>
        </div>
        <div className="social-proof">Self-taught dev building in public</div>
        <div className="topics">
          SaaS.
          <br />
          Next.js &amp; Supabase.
          <br />
          Cybersecurity.
          <br />
          Lessons learned.
        </div>
        <NewsletterForm />
      </div>

      {/* Avatar */}
      <div className="avatar-section fade-up">
        <div className="avatar-wrapper">
          <Image
            src="/avatar-new.png"
            alt="Dom - 3D Avatar"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="avatar-tagline">ship fast · iterate faster</div>
      </div>

      {/* Hire Me Card */}
      <div className="card hire-card fade-up">
        <div className="status-badge">
          <span className="status-dot"></span>
          Available 2026
        </div>
        <h2>Hire me</h2>
        <div className="description">
          Apps, Websites + AI.
          <br />
          Founders, let&apos;s talk.
        </div>
      </div>

      {/* Project: Statement Desk */}
      <a href="https://statementdesk.com" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card project-card fade-up">
          <div className="project-label">Product</div>
          <h3>Statement Desk</h3>
          <div className="tagline">
            PDF bank statement converter for accountants.
          </div>
          <span className="badge badge-live">Live</span>
        </div>
      </a>

      {/* /exploits Card */}
      <div className="card darkfiles-card fade-up">
        <div className="darkfiles-icon">▶</div>
        <h3>/exploits</h3>
        <div className="tagline">
          YouTube channel covering cybersecurity, scams &amp; fraud. Stories
          paired with tools I build.
        </div>
        <span
          className="badge badge-live"
          style={{ background: "rgba(220,38,38,0.12)", color: "#ef4444" }}
        >
          YouTube
        </span>
      </div>

      {/* Project: Genscript */}
      <a href="https://genscript.io" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card project-card fade-up">
          <div className="project-label">Product</div>
          <h3>Genscript</h3>
          <div className="tagline">
            AI-powered YouTube script generation.
          </div>
          <span className="badge badge-live">Live</span>
        </div>
      </a>

      {/* Project: FlipChecker */}
      <a href="https://flipchecker.io" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card project-card fade-up">
          <div className="project-label">Product</div>
          <h3>FlipChecker</h3>
          <div className="tagline">
            Reseller tool + Chrome extension. Facebook Marketplace to eBay,
            simplified.
          </div>
          <span className="badge badge-live">Live</span>
        </div>
      </a>

      {/* Build with Dom Card */}
      <div className="card buildwithdom-card fade-up">
        <div className="buildwithdom-icon">▶</div>
        <h3>Build with Dom</h3>
        <div className="tagline">
          Local LLMs, SaaS products &amp; the indie hacker journey.
        </div>
        <span
          className="badge badge-live"
          style={{ background: "rgba(220,38,38,0.12)", color: "#ef4444" }}
        >
          YouTube
        </span>
      </div>

      {/* Tech Stack Card */}
      <div className="card fade-up">
        <div className="project-label">Built with</div>
        <div className="stack-grid">
          <span className="stack-tag">Next.js 15</span>
          <span className="stack-tag">Supabase</span>
          <span className="stack-tag">React Native</span>
          <span className="stack-tag">Tailwind CSS</span>
          <span className="stack-tag">shadcn/ui</span>
          <span className="stack-tag">Stripe</span>
          <span className="stack-tag">Vercel</span>
        </div>
      </div>

      {/* Roadmap Card */}
      <div className="card roadmap-card fade-up">
        <div className="pipeline">
          <span className="pipeline-stage active">Planning</span>
          <span className="pipeline-line"></span>
          <span className="pipeline-stage">Started</span>
          <span className="pipeline-line"></span>
          <span className="pipeline-stage">Done</span>
        </div>
        <h3>2026 product strategy.</h3>
        <div className="roadmap-sub">Big things shipping.</div>

        <div className="roadmap-label">Up Next</div>
        <div className="roadmap-item">Scale Statement Desk to more firms</div>
        <div className="roadmap-item">Grow Genscript user base</div>
        <div className="roadmap-item">Grow /exploits to 10K subs</div>
        <div className="roadmap-item">Hit $7.5K MRR across products</div>

        <div className="quarter-label">2026 Q1</div>
      </div>

      {/* Footer */}
      <footer className="footer fade-up">
        <div className="footer-socials">
          <a href="https://www.threads.com/@dominickjerell" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Threads">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.416 2.35 5.56 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.775.709c-1.047-3.768-3.677-5.498-7.56-5.523-2.658.018-4.673.876-5.987 2.55C4.977 6.836 4.28 8.906 4.256 12c.024 3.094.721 5.164 1.95 6.699 1.314 1.674 3.329 2.532 5.987 2.55 2.14-.016 3.84-.508 5.049-1.46 1.326-1.044 1.98-2.494 1.944-4.308-.023-1.178-.396-2.107-1.107-2.762-.684-.63-1.64-.975-2.757-1.028a10.34 10.34 0 0 0-.267-.005c-1.033 0-1.93.26-2.6.753-.698.514-1.082 1.238-1.082 2.04 0 .712.283 1.33.797 1.738.49.39 1.156.588 1.98.588.54 0 1.06-.076 1.546-.226l.814 2.65a8.08 8.08 0 0 1-2.36.35c-1.577 0-2.9-.454-3.824-1.312-1.012-.94-1.547-2.262-1.547-3.824 0-1.603.66-2.968 1.908-3.946 1.172-.92 2.709-1.405 4.45-1.405l.335.007c1.793.08 3.32.683 4.413 1.742 1.094 1.06 1.693 2.526 1.73 4.233.047 2.545-.925 4.634-2.812 6.042-1.626 1.214-3.772 1.86-6.382 1.882z"/>
            </svg>
          </a>
          <a href="https://github.com/djdjdallas" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/away_mins" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <div className="footer-tagline">Built with caffeine and Claude.</div>
        <div className="footer-copy">© 2026 Dominick Hill. All rights reserved.</div>
      </footer>

      <ScrollAnimator />
    </div>
  );
}
