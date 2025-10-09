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
            I'm a 23 y/o software engineer based in Paris, building products that matter. I built a community of 3,000+ followers on social media where I share about tech, building in public, and startups.
          </p>

          {/* Experience */}
          <div className="space-y-4 pt-4">
            <h2 className="text-base font-normal text-black">Experience</h2>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://opensource-together.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                OpenSource Together
              </a>{" "}
              <span className="text-gray-600">Co-Founder (2025–Present)</span> – Led a <strong>multidisciplinary team of 10 people</strong> to build a platform that unites developers, designers and creatives to shape the future of open-source. <strong>500 sign up at launch</strong>, team included designers, ML engineers, backend and frontend developers
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                Cursor
              </a>{" "}
              <span className="text-gray-600">Ambassador (2025–Present)</span> – <strong>First French ambassador</strong> for Cursor. Organized multiple events with <strong>100+ people</strong> present at <strong>Amo, Hexa</strong> and other venues, explaining my <strong>AI-driven development workflows</strong> to help developers code faster
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://chataigne.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                Châtaigne.ai
              </a>{" "}
              <span className="text-gray-600">Founding Engineer (2024–2025)</span> – <strong>First founding engineer</strong> of the company. <strong>0-to-1 journey with €1.5M raised</strong>, completely rebuilt and optimized the frontend with <strong>scalable architecture and comprehensive testing</strong>, implemented <strong>full-stack end-to-end features</strong>. Worked closely with users with strong product vision, developed <strong>marketing solutions that reached 10,000+ users</strong>
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
              <span className="text-gray-600">Student (2024–Present)</span> – Computer Science and Software Engineering through <strong>peer-to-peer learning</strong>. Finished among the <strong>top of my entrance competition</strong>, member of <strong>42entrepreneurs association</strong>, organized <strong>tech events</strong> with them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}