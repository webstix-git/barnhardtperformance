import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>Barnhardt Performance</div>
        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 500, opacity: 0.92 }}>Built for Power. Driven by Precision.</div>
        <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 14, fontSize: 26, opacity: 0.9 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#ff8a00",
            }}
          />
          <div>Engine builds • Dyno tuning • Fabrication • Performance service</div>
        </div>
      </div>
    ),
    size,
  );
}

