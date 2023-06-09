import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/example">/example</Link>
        </li>
        <li>
          <Link href="/例">/例</Link>
        </li>
        <li>
          <Link href="/🦄">/🦄</Link>
        </li>
      </ul>
    </div>
  );
}
