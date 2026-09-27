type Props = {
  kicker?: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({ kicker, title, text, align = "center", light }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {kicker && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] ${
            light ? "bg-white/15 text-gold" : "bg-gold/25 text-berry"
          }`}
        >
          ✦ {kicker}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-white/80" : "text-ink/70"}`}>{text}</p>}
    </div>
  );
}
