import Link from "next/link";
import ShowOpenGraphImage from "./ShowOpenGraphImage";

/** Add your relevant code here for the issue to reproduce */
export default function Home({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const expectedOpenGraphImageUrl = `/${slug}/opengraph-image`;
  return (
    <div>
      <div>
        <Link href="/">Top</Link>
      </div>
      <div>slug={slug}</div>
      <div>slugDecoded={decodeURIComponent(slug)}</div>
      <div>expected={expectedOpenGraphImageUrl}</div>
      <ShowOpenGraphImage expected={expectedOpenGraphImageUrl} />
    </div>
  );
}
