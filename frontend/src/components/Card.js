export default function Card({ children }) {
  return (
    <div style={{
      background: "var(--card)",
      padding: 20,
      borderRadius: 10,
      marginBottom: 16,
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
    }}>
      {children}
    </div>
  );
}
