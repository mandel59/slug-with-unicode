import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home({
  searchParams,
}: {
  searchParams: { q?: string | string[] };
}) {
  return (
    <div>
      <div>q={searchParams.q}</div>
      <div>
        <Link href="/another">Another</Link>
      </div>
    </div>
  );
}
