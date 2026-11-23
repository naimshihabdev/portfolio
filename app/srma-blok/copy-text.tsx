"use client";

import { useState } from "react";

export default function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/70">
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
        <h1 className="text-sm font-medium text-slate-200">tes.md</h1>
        <button
          type="button"
          onClick={copy}
          className="rounded-md bg-teal-300 px-3 py-1.5 text-sm font-medium text-teal-950 transition hover:bg-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
          {copied ? "Tersalin" : "Salin"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words p-5 font-mono text-sm leading-6 text-slate-200">
        <code>{text}</code>
      </pre>
    </section>
  );
}
