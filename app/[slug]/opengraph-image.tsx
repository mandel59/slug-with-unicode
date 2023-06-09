import { ImageResponse } from "next/server";

export const runtime = "edge";

export const revalidate = 10;

export default async function og({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
        <div style={{ display: "flex" }}>
          slug={slug}
        </div>
      </div>
    ),
    {}
  );
}
