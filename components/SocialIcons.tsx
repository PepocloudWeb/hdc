import { site } from "@/lib/content";

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d="M14 8.5V6.8c0-.8.5-1.3 1.3-1.3H17V2.2h-2.6C11.6 2.2 10.4 4 10.4 6.4v2.1H8v3.4h2.4V22H14V11.9h2.7l.4-3.4H14z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="size-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Youtube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

const links = [
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook, color: "hover:bg-ice" },
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram, color: "hover:bg-candy" },
  { href: site.socials.youtube, label: "YouTube", Icon: Youtube, color: "hover:bg-cranberry" },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`grid size-10 place-items-center rounded-full bg-white/15 text-current ring-1 ring-current/20 transition hover:-translate-y-0.5 hover:text-white ${color}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
