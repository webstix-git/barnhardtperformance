import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #071426 0%, #102037 45%, #0b1a2e 100%)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: -1 }}>Barnhardt Performance</div>
        <div style={{ marginTop: 18, fontSize: 32, fontWeight: 500, opacity: 0.92 }}>Built for Power. Driven by Precision.</div>
        <div style={{ marginTop: 38, fontSize: 24, opacity: 0.9 }}>Bloomer, Wisconsin</div>
      </div>
    ),
    size,
  );
}

