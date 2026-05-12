const MONO = "ui-monospace, 'SF Mono', monospace";
const SERIF = "'Lora', Georgia, serif";
const BG = "#F5F5F5";
const TEXT = "#1a1a1a";
const MUTED = "#888";
const FAINT = "#999";

export default function Home() {
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
    fontFamily: MONO,
    fontSize: "0.6875rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: MUTED,
    textDecoration: "none",
    transition: "color 0.15s",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "5rem 1.5rem 6rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontFamily: SERIF, fontSize: "1.875rem", fontWeight: 400, color: TEXT, margin: "0 0 0.75rem", letterSpacing: "-0.01em" }}>
            Byron Love
          </h1>
          <nav style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {[
              { label: "mail", href: "mailto:111byronlove@gmail.com" },
              { label: "github", href: "https://github.com/byronlove111", external: true },
              { label: "x", href: "https://x.com/byronlove111", external: true },
              { label: "blog", href: "/blog" },
            ].map((item, i, arr) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={monoLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                  onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                >
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: "#ccc" }}>·</span>
                )}
              </span>
            ))}
          </nav>
        </header>

        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem", marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: SERIF, fontSize: "1rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
            I'm a {age} y/o software engineer based in Paris, building products that matter.
            I built a community of 3,000+ followers on social media where I share about tech,
            building in public, and startups.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "1rem", lineHeight: 1.8, color: TEXT, margin: 0 }}>
            Interests:{" "}
            {[
              { label: "synthesizers", href: "/synthesizers" },
              { label: "music", href: "/music" },
              { label: "cinema", href: "/cinema" },
              { label: "games", href: "/games" },
            ].map((item, i, arr) => (
              <span key={item.label}>
                <a href={item.href} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {item.label}
                </a>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}, my wife
          </p>
        </div>

        {/* Experience */}
        <section>
          <div style={{ fontFamily: MONO, fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: FAINT, marginBottom: "1.75rem" }}>
            Experience
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem" }}>
            {[
              {
                name: "OpenSource Together",
                href: "https://opensource-together.com",
                role: "Co-Founder",
                period: "2025–Present",
                desc: "Led a team of 10 people to build a platform connecting developers, designers and creatives.",
                highlight: "500 sign ups at launch.",
              },
              {
                name: "Cursor",
                href: "https://cursor.sh",
                role: "Ambassador",
                period: "2025–Present",
                desc: "First French ambassador for Cursor. Organized events with 100+ people at Amo, Hexa and other venues, teaching AI-driven development workflows.",
                highlight: null,
              },
              {
                name: "Châtaigne.ai",
                href: "https://chataigne.ai",
                role: "Founding Engineer",
                period: "2024–2025",
                desc: "First founding engineer. Designed and rebuilt entire frontend, implemented full-stack features. Developed marketing solutions reaching",
                highlight: "5,000+ users.",
              },
              {
                name: "École 42",
                href: "https://42.fr",
                role: "Student",
                period: "2024–Present",
                desc: "Computer Science through peer-to-peer learning. Top of entrance competition, member of 42entrepreneurs association.",
                highlight: null,
              },
            ].map((job) => (
              <div key={job.name}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", marginBottom: "0.375rem", flexWrap: "wrap" as const }}>
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 500, color: TEXT, textDecoration: "underline", textUnderlineOffset: "2px" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    {job.name}
                  </a>
                  <span style={{ fontFamily: MONO, fontSize: "0.625rem", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#aaa" }}>
                    {job.role} · {job.period}
                  </span>
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "0.9375rem", lineHeight: 1.75, color: "#444", margin: 0 }}>
                  {job.desc}{" "}
                  {job.highlight && <span style={{ color: TEXT, fontWeight: 500 }}>{job.highlight}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
