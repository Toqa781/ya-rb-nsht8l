import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white text-[#111827]">

      
      <aside className="hidden min-h-screen w-[39%] flex-col bg-[#EEF2FF] px-10 py-10 lg:flex xl:px-12">

        
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5] text-white">
            ✓
          </div>

          <span className="text-xl font-bold">
            Trackora
          </span>
        </Link>

        
        <div className="my-auto max-w-md py-12">

          <h2 className="text-3xl font-semibold leading-tight">
            A clear space for what comes next.
          </h2>

          <p className="mt-5 text-sm leading-6 text-[#4B5563]">
            Keep your applications, deadlines and follow-ups
            together. Make room for your next chapter.
          </p>

          
          <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-6">

            <h3 className="mb-6 text-sm font-semibold">
              One step closer
            </h3>

            <div className="space-y-6">

              <Feature
                title="Every opportunity"
                description="All your applications, in one place."
              />

              <Feature
                title="Every next step"
                description="Know what's due and what's ahead."
              />

              <Feature
                title="A little momentum"
                description="Small steps. Big possibilities."
              />

            </div>
          </div>
        </div>

      
        <p className="text-sm font-medium text-[#4F46E5]">
          Less tracking. More moving forward.
        </p>
      </aside>

      
      <div className="flex min-h-screen min-w-0 flex-1 flex-col px-6 py-8 sm:px-10 lg:px-12">

      
        <header className="flex items-center justify-between gap-4 text-xs text-[#6B7280]">

          <span className="hidden lg:block">
            Your job search. Your space.
          </span>

         
          <Link
            to="/"
            className="flex items-center gap-2 text-[#111827] lg:hidden"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5] text-white">
              
            </span>

            <span className="text-lg font-bold">
              Trackora
            </span>
          </Link>

          <span>Need help?</span>
        </header>

        
        <main className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-[400px]">
            {children}
          </div>
        </main>

        
        <footer className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#6B7280]">
          <span>© 2026 Trackora</span>
          <span>Privacy</span>
          <span>Terms</span>
        </footer>

      </div>
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({
  title,
  description,
}: FeatureProps) {
  return (
    <div className="flex items-start gap-4">


      <div>
        <h4 className="text-sm font-semibold">
          {title}
        </h4>

        <p className="mt-1 text-xs text-[#6B7280]">
          {description}
        </p>
      </div>

    </div>
  );
}