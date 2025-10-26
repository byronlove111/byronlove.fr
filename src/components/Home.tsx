export default function Home() {
  // Calcul automatique de l'âge à partir de la date de naissance
  const calculateAge = () => {
    const birthDate = new Date(2002, 6, 7); // 7 juillet 2002 (mois en JavaScript: 0=janvier, 6=juillet)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Ajustement si l'anniversaire n'est pas encore passé cette année
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const age = calculateAge();

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-black">Byron Love</h1>
            <p className="text-sm text-black">
              <a
                href="mailto:111byronlove@gmail.com"
                className="underline hover:no-underline transition-all"
              >
                mail
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
            I'm a {age} y/o software engineer based in Paris, building products that matter. I built a community of 3,000+ followers on social media where I share about tech, building in public, and startups.
          </p>

          <p className="text-sm text-black leading-relaxed">
            Interests: <a href="/synthesizers" className="underline hover:no-underline transition-all">synthesizers</a>, <a href="/music" className="underline hover:no-underline transition-all">music</a>, <a href="/cinema" className="underline hover:no-underline transition-all">cinema</a>, <a href="/games" className="underline hover:no-underline transition-all">games</a>, my wife
          </p>

          {/* Experience */}
          <div className="space-y-6 pt-4">
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
              <span className="text-gray-600">Co-Founder (2025–Present)</span> – Led a team of 10 people to build a platform connecting developers, designers and creatives. <span className="font-medium">500 sign up at launch</span>
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
              <span className="text-gray-600">Ambassador (2025–Present)</span> – <span className="font-medium">First French ambassador</span> for Cursor. Organized events with 100+ people at Amo, Hexa and other venues, teaching AI-driven development workflows
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
              <span className="text-gray-600">Founding Engineer (2024–2025)</span> – First founding engineer. <span className="font-medium">0-to-1 journey</span>, designed and rebuilt entire frontend with scalable architecture and testing, implemented full-stack features. Developed marketing solutions reaching <span className="font-medium">5,000+ users</span>
            </p>

            <p className="text-sm text-black leading-relaxed">
              <a
                href="https://42.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-all"
              >
                Ecole 42
              </a>{" "}
              <span className="text-gray-600">Student (2024–Present)</span> – Computer Science through peer-to-peer learning. Top of entrance competition, member of 42entrepreneurs association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}