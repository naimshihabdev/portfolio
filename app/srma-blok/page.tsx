import { readFile } from "node:fs/promises";
import { join } from "node:path";
import CopyText from "./copy-text";

export const metadata = {
  title: "Teks | Naim Shihab",
};

export default async function SrmaBlokPage() {
  const text = await readFile(join(process.cwd(), "tes.md"), "utf8");

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-10">
      <CopyText text={text} />
    </main>
  );
}
