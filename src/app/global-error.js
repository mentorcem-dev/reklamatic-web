"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#070712", color: "#fff", fontFamily: "sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
          <div>
            <p style={{ color: "#a78bfa", letterSpacing: ".16em", textTransform: "uppercase" }}>Reklamatic.ai</p>
            <h1>Something went wrong.</h1>
            <p style={{ color: "#a7a7c2" }}>Please try again or email info@reklamatic.ai.</p>
            <button onClick={() => reset()} style={{ marginTop: 16, border: 0, borderRadius: 999, padding: "12px 20px", fontWeight: 700, cursor: "pointer" }}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
