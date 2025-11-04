export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MX Tech Community</h3>
            <p className="text-foreground/70 text-sm">
              Connecting tech communities in México, fostering collaboration and
              growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="/communities"
                  className="hover:text-foreground transition-colors"
                >
                  Communities
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-foreground transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/sponsors"
                  className="hover:text-foreground transition-colors"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>Open source project. Contribute on GitHub.</p>
          <p className="mt-2">
            &copy; {currentYear} MX Tech Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
