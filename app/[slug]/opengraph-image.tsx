import { ImageResponse } from "next/og";

export const runtime = "edge";

export const revalidate = 10;

export default async function og({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const slugDecoded = decodeURIComponent(slug);
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "32px",
          gap: "32px",
        }}
      >
        <div style={{ display: "flex" }}>slug={slug}</div>
      </div>
    ),
    {}
  );
}
