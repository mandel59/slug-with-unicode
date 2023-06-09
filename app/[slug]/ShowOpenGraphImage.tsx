"use client";

import { useEffect, useState } from "react";

export default function ShowOpenGraphImage({
  expected,
}: {
  expected?: string;
}) {
  const [openGraphImageUrl, setOpenGraphImageUrl] = useState("");
  useEffect(() => {
    // get meta element with opengraph image
    const meta = document.querySelector(
      'meta[property="og:image"]'
    ) as HTMLMetaElement;
    // get url of opengraph image
    const url = meta.content;
    // set url to state
    setOpenGraphImageUrl(url);
  }, []);
  // get path of url
  const path = openGraphImageUrl && new URL(openGraphImageUrl).pathname;
  const mismatch = expected && path && expected !== path;
  return (
    <div>
      <div>
        <span>
          actual=
          <span
            style={
              mismatch
                ? { color: "red", fontWeight: "bolder" }
                : { color: "green" }
            }
          >
            {path}
          </span>
        </span>
      </div>
      <div>image={openGraphImageUrl && <img src={openGraphImageUrl} />}</div>
    </div>
  );
}
