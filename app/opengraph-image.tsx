import { ImageResponse } from "next/og";

export const runtime = "edge";

export const revalidate = 10;

export default async function og() {
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
          flexDirection: "row",
          gap: "32px",
        }}
      >
        <div style={{ display: "flex", fontSize: "128px" }}>/</div>
      </div>
    ),
    {}
  );
}
