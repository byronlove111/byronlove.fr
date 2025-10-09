export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-black">Malik Bourassi</h1>
            <p className="text-sm text-black">
              <a
                href="mailto:malik.chan94420@gmail.com"
                className="underline hover:no-underline transition-all"
              >
                mail
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/abd-al-malik-bourassi-2b4423301/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                linkedin
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/byronlove111"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                github
              </a>{" "}
              |{" "}
              <a
                href="https://x.com/byronlove111"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                x
              </a>
            </p>
          </div>

          <p className="text-sm text-black leading-relaxed">
            I'm a 23 y/o software engineer based in Paris, specializing in building scalable web applications in the JavaScript/TypeScript ecosystem with AI integration and comprehensive testing strategies.
          </p>

          {/* Experience */}
          <div className="space-y-4 pt-4">
            <h2 className="text-base font-normal text-black">experience</h2>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://opensource-together.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                OpenSource Together
              </a>{" "}
              (2025–Present) – Founded and led a multidisciplinary team to connect developers and creatives for collaboration, achieving successful waitlist launch.
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                Cursor Ambassador
              </a>{" "}
              (2025–Present) – Organize tech events (300+ people), demonstrating AI-driven development workflows and processes to educate the community.
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://chataigne.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                Châtaigne
              </a>{" "}
              (2024–2025) – Architected and rebuilt entire frontend systems serving thousands of users, while pioneering AI development workflows that boosted team productivity as founding engineer.
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://42.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                École 42
              </a>{" "}
              (2024–Present) – Computer Science and Software Engineering through peer-to-peer learning methodology and project-based curriculum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}