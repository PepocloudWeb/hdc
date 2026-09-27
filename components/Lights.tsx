const colors = ["#d7263d", "#ffb627", "#4cc9f0", "#7fe0c0", "#ff5d8f", "#6a3fb5", "#ff7a1a"];

/** A swagged string of twinkling Christmas lights. */
export default function Lights({ count = 24 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none relative h-10 w-full overflow-hidden">
      <svg className="absolute inset-x-0 top-0 h-6 w-full" preserveAspectRatio="none" viewBox="0 0 100 10">
        <path
          d={Array.from({ length: 8 }, (_, i) => `Q ${i * 12.5 + 6.25} 9 ${(i + 1) * 12.5} 1`).reduce(
            (acc, seg) => `${acc} ${seg}`,
            "M 0 1",
          )}
          fill="none"
          stroke="#1f3b2d"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-x-0 top-0 flex justify-around">
        {Array.from({ length: count }, (_, i) => {
          // follow the swag curve: each of the 8 dips spans count/8 bulbs
          const t = ((i + 0.5) / count) * 8;
          const dip = Math.sin((t % 1) * Math.PI);
          return (
            <span
              key={i}
              className="animate-twinkle block h-4 w-2.5 rounded-b-full rounded-t-sm"
              style={{
                marginTop: `${4 + dip * 12}px`,
                background: colors[i % colors.length],
                boxShadow: `0 0 12px 2px ${colors[i % colors.length]}`,
                animationDelay: `${(i % 5) * 0.3}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
