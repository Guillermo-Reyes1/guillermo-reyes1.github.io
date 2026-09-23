import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Rendered once at build time to /og.png (a real .png so static hosts send
// the right content type). Referenced from metadata in app/layout.tsx.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#003057",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "#B3A369",
              color: "#003057",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            GR
          </div>
          <div style={{ fontSize: 26, color: "#B3A369", letterSpacing: 2 }}>
            GEORGIA TECH · COMPUTER SCIENCE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div
            style={{ fontSize: 36, color: "#DBE3EA", marginTop: 20, lineHeight: 1.3 }}
          >
            {site.positioning}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 120, height: 6, background: "#B3A369" }} />
          <div style={{ fontSize: 26, color: "#A9B6C4" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
