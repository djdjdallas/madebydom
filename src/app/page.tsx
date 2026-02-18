import Image from "next/image";
import ScrollAnimator from "./scroll-animator";

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
        <div className="newsletter-form">
          <input type="email" placeholder="you@email.com" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Avatar */}
      <div className="avatar-section fade-up">
        <div className="avatar-wrapper">
          <Image
            src="/avatar.png"
            alt="Dom - 3D Avatar"
            width={480}
            height={480}
            priority
          />
        </div>
        <div className="avatar-tagline">ship fast. iterate faster.</div>
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

      {/* Project: StatementDesk */}
      <div className="card project-card fade-up">
        <div className="project-label">Product</div>
        <h3>StatementDesk</h3>
        <div className="tagline">
          PDF bank statement converter for UK accountants.
        </div>
        <span className="badge badge-revenue">Generating Revenue</span>
      </div>

      {/* Project: genscript */}
      <div className="card project-card fade-up">
        <div className="project-label">Product</div>
        <h3>genscript</h3>
        <div className="tagline">
          AI-powered YouTube script generation. 7 active users.
        </div>
        <span className="badge badge-live">Live</span>
      </div>

      {/* Project: Stash'd */}
      <div className="card project-card visual-card fade-up">
        <div>
          <div className="project-label">Product</div>
          <h3>Stash&apos;d</h3>
          <div className="tagline">
            Save screenshots. Organize ideas. Ship faster.
          </div>
          <span className="badge badge-live">Live</span>
        </div>
        <div className="orb"></div>
      </div>

      {/* Project: Reelytics */}
      <div className="card project-card fade-up">
        <div className="project-label">Product</div>
        <h3>Reelytics.io</h3>
        <div className="tagline">
          Analytics for short video content &amp; drama series on DramaBox and
          more.
        </div>
        <span className="badge badge-soon">In Development</span>
      </div>

      {/* Project: FlipChecker */}
      <div className="card project-card fade-up">
        <div className="project-label">Product</div>
        <h3>FlipChecker</h3>
        <div className="tagline">
          Reseller tool + Chrome extension. Facebook Marketplace to eBay,
          simplified.
        </div>
        <span className="badge badge-soon">In Development</span>
      </div>

      {/* The Dark Files Card */}
      <div className="card darkfiles-card fade-up">
        <div className="darkfiles-icon">▶</div>
        <h3>The Dark Files</h3>
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

      {/* Build with Dom Card */}
      <div className="card buildwithdom-card fade-up">
        <div className="buildwithdom-icon">▶</div>
        <h3>Build with Dom</h3>
        <div className="tagline">
          YouTube channel documenting building SaaS products, coding tutorials
          &amp; the indie hacker journey.
        </div>
        <span
          className="badge badge-live"
          style={{ background: "rgba(220,38,38,0.12)", color: "#ef4444" }}
        >
          YouTube
        </span>
      </div>

      {/* ScamShield Card */}
      <div className="card project-card visual-card fade-up">
        <div>
          <div className="project-label">Coming soon</div>
          <h3>ScamShield</h3>
          <div className="tagline">
            Chrome extension for detecting crypto scams.
          </div>
          <span className="badge badge-soon">In Development</span>
        </div>
        <span className="coming-soon-text">Coming Soon</span>
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
        <div className="roadmap-item">
          Scale StatementDesk to more UK firms
        </div>
        <div className="roadmap-item">Launch ScamShield Chrome extension</div>
        <div className="roadmap-item">Launch Reelytics.io for content creators</div>
        <div className="roadmap-item">Ship FlipChecker extension</div>
        <div className="roadmap-item">Grow The Dark Files to 10K subs</div>
        <div className="roadmap-item">Hit $7.5K MRR across products</div>

        <div className="quarter-label">2026 Q1</div>
      </div>

      {/* Footer */}
      <footer className="footer fade-up">
        <div>
          <a href="#" className="footer-link">
            Find me here →
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V11.5h3.25v.568c0 2.883.663 5.163 1.97 6.773 1.256 1.545 3.184 2.372 5.734 2.46l-.034-4.015c-1.224-.093-2.21-.492-2.937-1.191-.886-.852-1.36-2.107-1.407-3.733l-.005-.175V6.8H5.25V3.55h2.821V0h3.25v3.55h2.85v3.25h-2.85v5.437c.03.863.27 1.47.717 1.803.35.261.868.4 1.498.413h.035l.034 3.973c.742.006 1.418-.093 2.02-.296.89-.3 1.592-.827 2.088-1.565.55-.82.84-1.901.864-3.213V6.8h-2.821V3.55h2.821V0h3.25v3.55H22.5v3.25h-.773v5.552c-.035 1.91-.497 3.544-1.373 4.856-.832 1.247-2.004 2.192-3.481 2.808-1.148.478-2.47.74-3.935.78-.089.003-.178.005-.268.005L12.186 24z" />
            </svg>
          </a>
        </div>
        <div className="footer-tagline">Built with caffeine and Claude.</div>
        <div className="footer-copy">© 2026 Dom. All rights reserved.</div>
      </footer>

      <ScrollAnimator />
    </div>
  );
}
