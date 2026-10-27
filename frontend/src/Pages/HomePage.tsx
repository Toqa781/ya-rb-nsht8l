import { Link} from "react-router-dom";
 const features = [
    {
    number:"01",
    title:"Track every application",
    description:"Keep you job application, companies, roles, and application statuses organized",
   },
   {
    number:"02",
    title:"Never miss a deadline",
    description:"Stay on top of assesments, interviews, reminders, and important folllow-ups",  
   },
   {
    number:"03",
    title:"See your progress",
    description:"Track job search statistics, progress, and upcoming tasks to stay organized and focused",
   }
 ];

 function HomePage() {
    return (
        <div className="min-h-screen bg-page text-ink">
            <header className="border-b border-line bg-surface">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Trackora homepage"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white">
              T
            </div>

            <span className="text-xl font-bold tracking-tight">
              Trackora
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex h-11 items-center justify-center rounded-button px-4 text-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="inline-flex h-11 items-center justify-center rounded-button bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-6 py-20 text-center lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
              Your job search, organized
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your next opportunity
              <br />
              starts with{" "}
              <span className="text-primary">
                Trackora.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              From your first application to your final interview,
              Trackora helps you stay organized, meet deadlines,
              and move forward with confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex h-12 items-center justify-center rounded-button bg-primary px-7 font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Get Started Free
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                to="/login"
                className="inline-flex h-12 items-center justify-center rounded-button border border-line-strong bg-surface px-7 font-semibold text-ink transition-colors hover:bg-page"
              >
                I Have an Account
              </Link>
            </div>

            <p className="mt-5 text-sm text-subtle">
              Built for students, graduates, and job seekers.
            </p>
          </div>
        </section>

        {/* PRODUCT PREVIEW */}
        <section className="px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface shadow-xl">
            <div className="flex items-center gap-2 border-b border-line bg-page px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-green-300" />

              <span className="ml-4 text-xs font-medium text-muted">
                Trackora · Dashboard Preview
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm text-muted">
                  Your workspace
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Stay on top of your journey
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-card border border-line bg-page p-5">
                  <p className="text-sm text-muted">
                    Applications
                  </p>
                  <p className="mt-3 text-3xl font-bold">
                    12
                  </p>
                </div>

                <div className="rounded-card border border-line bg-page p-5">
                  <p className="text-sm text-muted">
                    Interviews
                  </p>
                  <p className="mt-3 text-3xl font-bold text-primary">
                    3
                  </p>
                </div>

                <div className="rounded-card border border-line bg-page p-5">
                  <p className="text-sm text-muted">
                    Upcoming Tasks
                  </p>
                  <p className="mt-3 text-3xl font-bold">
                    5
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-card border border-line p-5">
                <h3 className="mb-4 font-semibold">
                  Recent Applications
                </h3>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                    <div>
                      <p className="font-medium">
                        Software Engineer Intern
                      </p>
                      <p className="text-sm text-muted">
                        Valeo
                      </p>
                    </div>

                    <span className="rounded-full bg-tone-amber-bg px-3 py-1 text-xs font-semibold text-tone-amber-text">
                      Interview
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">
                        Backend Developer
                      </p>
                      <p className="text-sm text-muted">
                        Vodafone
                      </p>
                    </div>

                    <span className="rounded-full bg-tone-blue-bg px-3 py-1 text-xs font-semibold text-tone-blue-text">
                      Applied
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-subtle">
                Illustrative preview with sample data
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-surface px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to stay organized
              </h2>

              <p className="mt-4 text-muted">
                Spend less time managing spreadsheets and more time
                preparing for your next opportunity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-card border border-line bg-surface p-7 shadow-sm"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light font-bold text-primary">
                    {feature.number}
                  </div>

                  <h3 className="text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-8 py-16 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your next chapter starts here.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-indigo-100">
              Keep your applications, interviews, and deadlines
              together in one organized workspace.
            </p>

            <Link
              to="/register"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-button bg-white px-7 font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              Create Your Account
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line bg-surface px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-semibold text-ink">
            Trackora
          </p>

          <p className="text-sm text-muted">
            One application at a time. You've got this.
          </p>

          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} Trackora
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;