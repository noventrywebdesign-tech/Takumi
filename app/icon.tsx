import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e3aa22",
          borderRadius: 14,
        }}
      >
        <div style={{ display: "flex", fontSize: 38, fontFamily: "serif", color: "#16130e" }}>匠</div>
      </div>
    ),
    { ...size }
  );
}
