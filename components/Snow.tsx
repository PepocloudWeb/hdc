// Deterministic pseudo-random so server and client markup match.
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export default function Snow({ count = 28 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="snowflake"
          style={
            {
              left: `${rand(i) * 100}%`,
              fontSize: `${10 + rand(i + 100) * 16}px`,
              opacity: 0.4 + rand(i + 200) * 0.6,
              animationDuration: `${9 + rand(i + 300) * 12}s`,
              animationDelay: `-${rand(i + 400) * 20}s`,
              "--drift": `${(rand(i + 500) - 0.5) * 120}px`,
            } as React.CSSProperties
          }
        >
          ❄
        </span>
      ))}
    </div>
  );
}
