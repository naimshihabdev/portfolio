export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed with Vercel. All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
