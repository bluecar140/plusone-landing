"use client";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#07111f",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{
        fontSize: "72px",
        fontWeight: "900",
        marginBottom: "20px"
      }}>
        PLUSONE
      </h1>

      <p style={{
        fontSize: "24px",
        maxWidth: "700px",
        color: "#b6c2d9",
        marginBottom: "40px"
      }}>
        Dating apps are dead. Bring your mate.
      </p>

      <input
        placeholder="Enter your email"
        style={{
          padding: "18px 24px",
          borderRadius: "16px",
          border: "none",
          width: "320px",
          fontSize: "16px",
          marginBottom: "16px"
        }}
      />

      <button style={{
        padding: "16px 28px",
        borderRadius: "16px",
        border: "none",
        background: "#2563eb",
        color: "white",
        fontWeight: "700",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Join Waitlist
      </button>
    </main>
  );
}
