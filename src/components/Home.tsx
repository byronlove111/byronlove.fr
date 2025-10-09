export default function Home() {
  return (
    <div className="mx-auto max-w-screen-sm px-4">
      <header className="mb-24 mt-24 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer select-none">
          <h1 className="text-xl font-normal">Malik Bourassi</h1>
          <p className="text-surface-8">Software Engineer</p>
        </div>
      </header>

      <main>
        <section className="mb-24">
          <h2 className="mb-4 text-base font-normal">Whoami</h2>
          <p className="mb-4 text-surface-11/80">
            I am a Software Engineer based in Paris, France, specializing in building scalable web applications in the JavaScript/TypeScript ecosystem, AI integration, and comprehensive testing strategies. I work on product development from conception to launch.
          </p>
          <p className="mb-4 text-surface-11/80">
            Previously at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-11 underline underline-offset-6 decoration-surface-11 hover:decoration-primary-11 hover:text-primary-11 decoration-dotted"
              href="https://chataigne.ai"
            >
              châtaigne
            </a>
            , I architected and rebuilt entire frontend systems serving thousands of users, while pioneering AI development workflows that boosted team productivity. I also founded and led{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-11 underline underline-offset-6 decoration-surface-11 hover:decoration-primary-11 hover:text-primary-11 decoration-dotted"
              href="https://opensource-together.com"
            >
              OpenSource Together
            </a>{" "}
            with a multidisciplinary team to connect developers and creatives for collaboration.
          </p>
          <p className="mb-4 text-surface-11/80">
            As a Cursor Ambassador in France, I educate the developer community on AI-powered development workflows and advanced coding techniques, organizing tech events and building a 3,000+ follower presence focused on development and startup ecosystem.
          </p>
        </section>

        <section className="mb-24">
          <div>
            <h2 className="mb-4 text-base font-normal">Timeline</h2>
            <div>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between my-2">
                  <div className="flex items-center">
                    <div className="text-surface-8">2024 – 2025</div>
                  </div>
                  <div className="flex flex-1 items-center sm:ml-auto">
                    <div className="ml-auto flex items-baseline gap-2 text-surface-10">
                      Founding Engineer at châtaigne
                    </div>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between my-2">
                  <div className="flex items-center">
                    <div className="text-surface-8">2025 – Present</div>
                  </div>
                  <div className="flex flex-1 items-center sm:ml-auto">
                    <div className="ml-auto flex items-baseline gap-2 text-surface-10">
                      Founder & Engineering Lead at OpenSource Together
                    </div>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between my-2">
                  <div className="flex items-center">
                    <div className="text-surface-8">2025 – Present</div>
                  </div>
                  <div className="flex flex-1 items-center sm:ml-auto">
                    <div className="ml-auto flex items-baseline gap-2 text-surface-10">
                      Cursor Ambassador (France)
                    </div>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between my-2">
                  <div className="flex items-center">
                    <div className="text-surface-8">2024 – Present</div>
                  </div>
                  <div className="flex flex-1 items-center sm:ml-auto">
                    <div className="ml-auto flex items-baseline gap-2 text-surface-10">
                      Computer Science at École 42
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 flex justify-between items-stretch">
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/byronlove111"
            className="text-surface-11 underline underline-offset-6 decoration-surface-11 hover:decoration-primary-11 hover:text-primary-11 decoration-dotted"
          >
            X
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/byronlove111"
            className="text-surface-11 underline underline-offset-6 decoration-surface-11 hover:decoration-primary-11 hover:text-primary-11 decoration-dotted"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abd-al-malik-bourassi-2b4423301/"
            className="text-surface-11 underline underline-offset-6 decoration-surface-11 hover:decoration-primary-11 hover:text-primary-11 decoration-dotted"
          >
            Linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}