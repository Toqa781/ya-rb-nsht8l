import Card from "../../Components/UI/Card"

const tips=[
    "Link the original listing for easy reference.",
    "Add a salary range to compare opportunities.",
    "Use notes for contacts and interview prep.",
];

function ApplicationTips() {
  return (
    <aside aria-label="Helpful tips">
      <Card>
        <svg
          aria-hidden="true"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>

        <h2 className="mt-4 text-xl font-semibold text-ink">
          Make room for what’s next.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Save the details now. Your future self will thank you before the interview.
        </p>

        <h3 className="mt-6 text-sm font-semibold text-ink">A few helpful details</h3>
        <ul className="mt-3 space-y-3">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-3 text-sm text-muted">
              <svg
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {tip}
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  );
}

export default ApplicationTips;