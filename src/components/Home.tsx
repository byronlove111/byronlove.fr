import { playSound } from "../lib/ui-sounds";

const MONO = "ui-monospace, 'SF Mono', monospace";
const SERIF = "'Lora', Georgia, serif";
const BG = "#ffffff";
const TEXT = "#1a1a1a";
const MUTED = "#888";
const FAINT = "#999";

interface Post {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export default function Home({ posts = [] }: { posts?: Post[] }) {
  const calculateAge = () => {
    const birthDate = new Date(2002, 6, 7);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  const age = calculateAge();

  const linkStyle = {
    color: TEXT,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    transition: "opacity 0.15s",
  };

  const monoLinkStyle = {
    fontFamily: SERIF,
    fontSize: "1rem",
    color: MUTED,
    textDecoration: "none",
    transition: "color 0.15s",
  };

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "5rem 1.5rem 6rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontFamily: SERIF, fontSize: "1.625rem", fontWeight: 400, color: TEXT, margin: "0 0 2rem", letterSpacing: "-0.01em" }}>
            Byron Love
          </h1>

          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem", marginBottom: "1.75rem" }}>
            <p style={{ fontFamily: SERIF, fontSize: "1rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
              I'm a Cursor ambassador and engineer based in Paris, building full-stack products and AI-native infrastructure from 0 → 1.
            </p>
            <p style={{ fontFamily: SERIF, fontSize: "1rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
              I care about systems that agents and humans actually want to use. Available for long-term commitments and one-off projects.
            </p>
            <p style={{ fontFamily: SERIF, fontSize: "1rem", lineHeight: 1.8, color: TEXT, margin: 0, marginTop: "1.75rem" }}>
              Interests:{" "}
              {[
                { label: "synthesizers", href: "/synthesizers" },
                { label: "music", href: "/music" },
                { label: "cinema", href: "/cinema" },
                { label: "games", href: "/games" },
              ].map((item, i, arr) => (
                <span key={item.label}>
                  <a href={item.href} style={{ ...linkStyle, color: TEXT }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    onClick={() => playSound("tap")}
                  >
                    {item.label}
                  </a>
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}, my wife
            </p>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {[
              { label: "mail", href: "mailto:111byronlove@gmail.com" },
              { label: "github", href: "https://github.com/byronlove111", external: true },
              { label: "x", href: "https://x.com/intent/follow?screen_name=byronlove111", external: true },
            ].map((item, i, arr) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={monoLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                  onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                  onClick={() => playSound("tap")}
                >
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ fontFamily: SERIF, fontSize: "1rem", color: "#ccc" }}>·</span>
                )}
              </span>
            ))}
          </nav>
        </header>

        {/* Experience */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ fontFamily: SERIF, fontSize: "0.875rem", color: MUTED, marginBottom: "1.75rem" }}>
            Experience
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem" }}>
            {[
              {
                name: "Cursor",
                href: "https://cursor.sh",
                role: "Ambassador",
                period: "2025–Present",
                desc: "AI-native code editor, used by millions of engineers worldwide. Ambassador for France — organized 4 events of 100+ people, teaching AI-driven development workflows. Work closely with the Cursor team on documentation and content.",
                highlight: null,
              },
              {
                name: "Châtaigne.ai",
                href: "https://chataigne.ai",
                role: "Founding Engineer",
                period: "2024–2025",
                desc: "Seed-stage AI food-tech startup — restaurants take orders through natural language on WhatsApp. First founding engineer on a 3-person team. Rebuilt the frontend from scratch and shipped full-stack features used by",
                highlight: "3,500 people in 3 days.",
              },
              {
                name: "OpenSource Together",
                href: "https://opensource-together.com",
                role: "Co-Founder",
                period: "2025–Present",
                desc: "Non-profit platform making open source accessible to developers. Co-founded and led a team of 10 volunteers. Built in public —",
                highlight: "1k followers on Twitter and 1k signups at launch.",
              },
              {
                name: "École 42",
                href: "https://42.fr",
                role: "Student",
                period: "2024–Present",
                desc: "Peer-to-peer computer science school. Top of entrance competition. Member of 42entrepreneurs.",
                highlight: null,
              },
            ].map((job) => (
              <div key={job.name}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "0.375rem" }}>
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 500, color: TEXT, textDecoration: "underline", textUnderlineOffset: "2px" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    onClick={() => playSound("tap")}
                  >
                    {job.name}
                  </a>
                  {" "}
                  <span style={{ fontFamily: SERIF, fontSize: "0.875rem", color: MUTED }}>
                    {job.role} · {job.period}
                  </span>
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "0.9375rem", lineHeight: 1.75, color: TEXT, margin: 0 }}>
                  {job.desc}{" "}
                  {job.highlight && <span style={{ color: TEXT, fontWeight: 500 }}>{job.highlight}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        {posts.length > 0 && (
          <section style={{ marginTop: "5rem" }}>
            <div style={{ fontFamily: SERIF, fontSize: "0.875rem", color: MUTED, marginBottom: "1.75rem" }}>
              Writing
            </div>
            <div>
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: "block", padding: "1.5rem 0", borderBottom: "1px solid #E8E7E2", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  onClick={() => playSound("tap")}
                >
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "0.375rem" }}>
                    <span style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 500, color: TEXT, lineHeight: 1.3 }}>
                      {post.title}
                    </span>
                    <span style={{ fontFamily: SERIF, fontSize: "0.875rem", color: MUTED, whiteSpace: "nowrap" as const, flexShrink: 0 }}>
                      {formatDate(post.date)}
                    </span>
                  </div>
                  {post.description && (
                    <p style={{ fontFamily: SERIF, fontSize: "0.9375rem", color: MUTED, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                      {post.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
