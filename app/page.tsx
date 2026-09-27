import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  Clock,
  Bell,
  Gift,
  Handshake,
  HandHeart,
  HeartPulse,
  MapPin,
  Stethoscope,
  Sparkles,
  Syringe,
  Ticket,
  TreePine,
  UserRound,
  UtensilsCrossed,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import Lights from "@/components/Lights";
import SectionTitle from "@/components/SectionTitle";
import Snow from "@/components/Snow";
import VideoCard from "@/components/VideoCard";
import {
  about,
  funFacts,
  gallery,
  included,
  intro,
  medical,
  pillars,
  prayer,
  site,
  spellingBee,
  videos,
  why,
} from "@/lib/content";

const countries = ["India", "Pakistan", "Bangladesh", "Nepal", "Sri Lanka", "China", "& many more"];
const pillColors = [
  "bg-cranberry text-white",
  "bg-gold text-ink",
  "bg-pine text-white",
  "bg-ice text-ink",
  "bg-candy text-white",
  "bg-plum text-white",
  "bg-tangerine text-white",
];

function RegisterButton({ className = "", children = "Register now" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={site.registerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-cranberry px-7 py-3.5 font-extrabold text-white shadow-[0_5px_0_var(--color-berry)] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_var(--color-berry)] ${className}`}
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}

function Wave({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full sm:h-20 ${className}`}>
      <path d="M0 40 C 240 90 480 0 720 36 S 1200 90 1440 30 V80 H0 Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-br from-plum via-berry to-cranberry pt-24 text-white">
        <Snow />
        <Lights count={32} />
        <div className="absolute -left-24 top-40 size-72 rounded-full bg-gold/25 blur-3xl" aria-hidden />
        <div className="absolute -right-10 bottom-10 size-80 rounded-full bg-ice/25 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-6 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.2em] text-gold ring-1 ring-white/25">
              <Bell className="animate-swing size-4" /> {site.year} Hamara Desi Christmas
            </span>
            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
              Hamara <span className="text-gold">Desi</span>
              <br />
              <span className="text-mint">Christmas</span>
              <span className="text-candy">!</span>
            </h1>
            <p className="mt-6 font-display text-2xl font-medium text-white/90">✝ {site.tagline}</p>

            <ul className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-ink">
                <CalendarDays className="size-4 text-cranberry" /> {site.date}
              </li>
              <li className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-ink">
                <Clock className="size-4" /> {site.time}
              </li>
              <li>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-ink hover:bg-white"
                >
                  <MapPin className="size-4 text-pine" /> {site.address}
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={site.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-8 py-4 font-extrabold text-ink shadow-[0_5px_0_var(--color-tangerine)] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_var(--color-tangerine)]"
              >
                Register now →
              </a>
              <Link href="#included" className="font-bold text-white/90 underline decoration-gold decoration-2 underline-offset-8 hover:text-white">
                See what&apos;s included
              </Link>
            </div>
          </div>

          <HeroCarousel />
        </div>
        <Wave className="text-cream" />
      </section>

      {/* ───────── MARQUEE ───────── */}
      <div className="-mt-3 overflow-hidden py-3">
      <div className="relative -rotate-1 overflow-hidden border-y-4 border-ink bg-gold py-4" aria-label={pillars.join(", ")}>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-bold uppercase text-ink" aria-hidden>
          {Array.from({ length: 2 }, (_, k) => (
            <div key={k} className="flex gap-10">
              {Array.from({ length: 4 }).flatMap((_, r) =>
                pillars.map((p, i) => (
                  <span key={`${r}-${i}`} className="flex items-center gap-10">
                    {p}
                    <span className={["text-cranberry", "text-pine", "text-plum"][i]}>✦</span>
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* ───────── INTRO ───────── */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <div className="relative grid gap-10 rounded-[2.5rem] bg-paper p-8 shadow-[0_14px_0_-4px_rgba(42,26,46,0.08)] ring-2 ring-ink/5 sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <span className="absolute -top-7 right-8 grid size-16 rotate-12 place-items-center rounded-2xl bg-pine text-white shadow-lg" aria-hidden>
            <TreePine className="size-9" />
          </span>
          <div>
            <SectionTitle
              align="left"
              kicker="Welcome"
              title={
                <>
                  The only <span className="text-cranberry">Desi</span> Christmas in{" "}
                  <span className="text-pine">Houston</span>
                </>
              }
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {countries.map((c, i) => (
                <span key={c} className={`rounded-full px-4 py-1.5 text-sm font-extrabold ${pillColors[i % pillColors.length]}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-ink/80">{intro}</p>
            <RegisterButton className="mt-8" />
          </div>
        </div>
      </section>

      {/* ───────── FUN FACTS ───────── */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <SectionTitle kicker="Fun Facts!" title="Free, festive & for everyone" />
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {funFacts.map((f, i) => {
            const styles = [
              { bg: "bg-cranberry", Icon: Gift },
              { bg: "bg-pine", Icon: UtensilsCrossed },
              { bg: "bg-plum", Icon: Stethoscope },
            ][i];
            return (
              <div key={f.title} className="animate-float relative pt-8" style={{ animationDelay: `${i * 0.8}s` }}>
                {/* ornament cap */}
                <div className="absolute left-1/2 top-0 h-6 w-14 -translate-x-1/2 rounded-t-lg bg-gradient-to-b from-gold to-tangerine" aria-hidden />
                <div className="absolute -top-4 left-1/2 size-6 -translate-x-1/2 rounded-full border-4 border-gold" aria-hidden />
                <div className={`relative rounded-[3rem] ${styles.bg} px-8 pb-10 pt-12 text-center text-white shadow-xl`}>
                  <div className="absolute inset-x-8 top-6 h-10 rounded-full bg-white/15 blur-md" aria-hidden />
                  <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-white/20">
                    <styles.Icon className="size-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">{f.title}</h3>
                  <p className="mt-3 text-white/85">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── WHAT'S INCLUDED ───────── */}
      <section id="included" className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-t-full bg-candy" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-8 border-paper">
              <Image src="/images/included.webp" alt="A festive Christmas stage dance performance" fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
            </div>
            <span className="absolute right-0 top-10 grid size-28 rotate-12 sm:-right-4 place-items-center rounded-full bg-gold text-center font-display text-2xl font-bold leading-none text-ink shadow-lg">
              100%
              <br />
              FREE
            </span>
          </div>

          <div>
            <SectionTitle align="left" kicker="What's Included" title="A night packed with joy" text={included.text} />
            <ul className="mt-8 space-y-3">
              {included.items.map((item, i) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl bg-paper p-3 pr-5 font-bold ring-2 ring-ink/5">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${pillColors[i % pillColors.length]}`}>
                    <Check className="size-5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── SPELLING BEE ───────── */}
      <section className="px-4 pt-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ice px-6 py-14 sm:px-12">
          <div className="confetti-bg absolute inset-0 opacity-70" aria-hidden />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <Image src="/images/spellingbee.png" alt="" width={96} height={96} className="animate-swing size-20 sm:size-24" />
                <h2 className="font-display text-5xl font-bold text-ink sm:text-6xl">Spelling Bee</h2>
              </div>
              <ul className="mt-8 space-y-2 text-lg font-bold">
                {spellingBee.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Sparkles className="size-6 shrink-0 text-plum" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-ink/70">Age limitation</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {spellingBee.groups.map((g, i) => (
                  <div key={g.name} className={`rounded-3xl p-5 ${i === 0 ? "bg-gold" : "bg-candy text-white"}`}>
                    <p className="font-display text-2xl font-bold">{g.name}</p>
                    <p className="font-bold opacity-85">{g.ages}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-lg rounded-2xl bg-white/60 p-4 font-semibold text-ink/80">{spellingBee.note}</p>
              <RegisterButton className="mt-6" />
            </div>
            <div className="relative mx-auto w-full max-w-sm rotate-3 rounded-2xl bg-white p-3 pb-10 shadow-2xl">
              <div className="relative aspect-[819/1024] overflow-hidden rounded-lg">
                <Image src="/images/flyer.jpg" alt="Hamara Desi Christmas 2025 flyer" fill sizes="24rem" className="object-cover" />
              </div>
              <span className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 -rotate-3 bg-gold/80" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MEDICAL + PRAYER ───────── */}
      <section className="relative mt-28 overflow-hidden bg-pine text-white">
        <Wave className="rotate-180 text-cream" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            light
            kicker="Medical Screening"
            title={
              <>
                Free Medical Screening <span className="text-mint">By Medical Professionals</span>
              </>
            }
          />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-mint" aria-hidden />
              <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
                <Image src="/images/medical.jpg" alt="Medical professional checking blood pressure" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="space-y-5">
              {medical.map((m, i) => {
                const Icon = [UserRound, Syringe, HeartPulse][i];
                const color = ["bg-gold text-ink", "bg-candy", "bg-ice text-ink"][i];
                return (
                  <div key={m.title} className="flex gap-5 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                    <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${color}`}>
                      <Icon className="size-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{m.title}</h3>
                      <p className="mt-1 text-white/80">{m.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-candy p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border-8 border-white/30">
              <Image src="/images/prayer.png" alt="People praying together" fill sizes="20rem" className="object-cover" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em]">
                <HandHeart className="size-4" /> Always here for you
              </span>
              <h2 className="mt-4 font-display text-5xl font-bold">Prayer Support</h2>
              <p className="mt-4 text-xl text-white/90">{prayer}</p>
              <a
                href={site.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-extrabold text-berry transition hover:bg-gold hover:text-ink"
              >
                Register now →
              </a>
            </div>
          </div>
        </div>
        <Wave className="text-cream" />
      </section>

      {/* ───────── EVENT DETAILS (ticket) ───────── */}
      <section id="details" className="mx-auto max-w-5xl scroll-mt-28 px-6 pt-24">
        <SectionTitle kicker="Save the date" title="Event Details" />
        <div className="ticket mt-12 grid overflow-hidden rounded-[2rem] bg-paper shadow-[0_18px_40px_-20px_rgba(42,26,46,0.45)] md:grid-cols-[14rem_1fr]">
          <div className="relative flex flex-col items-center justify-center gap-2 bg-cranberry p-8 text-center text-white md:border-r-4 md:border-dashed md:border-cream">
            <Ticket className="size-12 -rotate-12 text-gold" aria-hidden />
            <p className="font-display text-3xl font-bold leading-none">Admission</p>
            <p className="rounded-full bg-gold px-4 py-1 font-display text-xl font-bold text-ink">FREE</p>
          </div>
          <div className="grid gap-8 p-8 sm:grid-cols-3 sm:p-10">
            {[
              { label: "Event Start Time", value: site.time, Icon: Clock, color: "bg-gold/30 text-tangerine" },
              { label: "Date", value: site.date, Icon: CalendarDays, color: "bg-candy/20 text-cranberry" },
              { label: "Location", value: site.address, Icon: MapPin, color: "bg-mint/40 text-pine", href: site.mapUrl },
            ].map(({ label, value, Icon, color, href }) => (
              <div key={label}>
                <span className={`grid size-12 place-items-center rounded-2xl ${color}`}>
                  <Icon className="size-6" />
                </span>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-ink/60">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="mt-1 block font-display text-xl font-bold underline decoration-mint decoration-4 underline-offset-4 hover:text-pine">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-display text-xl font-bold">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ABOUT + WHY ───────── */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-28 space-y-28 px-6 pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[3/2] -rotate-2 overflow-hidden rounded-[2rem] border-8 border-white shadow-xl">
              <Image src="/images/about.jpg" alt="Hamara Desi Christmas celebration" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-2 flex gap-3 sm:right-6">
              <div className="grid size-28 place-items-center rounded-full bg-gold text-center font-display font-bold leading-tight text-ink shadow-lg">
                <span>
                  <span className="text-xs uppercase tracking-widest">Since</span>
                  <br />
                  <span className="text-3xl">2008</span>
                </span>
              </div>
              <div className="grid size-28 place-items-center rounded-full bg-plum text-center font-display font-bold leading-tight text-white shadow-lg">
                <span>
                  <span className="text-3xl">500+</span>
                  <br />
                  <span className="text-xs uppercase tracking-widest">each year</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle align="left" kicker="About Us" title={<>How it all <span className="text-cranberry">began</span></>} />
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{about.story}</p>
            <p className="mt-6 rounded-3xl border-l-8 border-pine bg-mint/30 p-5 text-lg font-bold">{about.now}</p>
          </div>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-tangerine" aria-hidden />
              <div className="relative aspect-video overflow-hidden rounded-[2rem]">
                <Image src="/images/why.png" alt="Performers celebrating on stage" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <SectionTitle align="left" kicker="Why We Do This" title={<>The most <span className="text-pine">wonderful</span> time of the year</>} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              {why.slice(0, 2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 flex items-center gap-4 rounded-3xl bg-plum p-5 font-bold text-white transition hover:-translate-y-1"
            >
              <Handshake className="size-8 shrink-0 text-gold" aria-hidden />
              <span>{why[2]}</span>
              <span className="ml-auto text-2xl" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── MOMENTS ───────── */}
      <section id="moments" className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-28">
        <SectionTitle kicker="Captivating Moments" title="Snapshots of the season" text="Get captivated by a stunning collection of events, games and foods." />
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`rounded-xl bg-white p-2.5 pb-8 shadow-lg transition hover:z-10 hover:rotate-0 hover:scale-105 ${
                ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"][i]
              } ${i % 2 ? "md:translate-y-8" : ""}`}
            >
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
              <span className={`mx-auto mt-3 block h-1.5 w-10 rounded-full ${["bg-cranberry", "bg-gold", "bg-pine", "bg-ice"][i]}`} aria-hidden />
            </figure>
          ))}
        </div>
      </section>

      {/* ───────── VIDEOS ───────── */}
      <section id="videos" className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-36">
        <SectionTitle
          kicker="From the archives"
          title="A Small Sampling Of The Eclectic Array of Our Previous Events"
          text="Explore some of our previous events’ videos on our YouTube Channel."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {videos.map((v, i) => (
            <VideoCard
              key={v.id}
              {...v}
              accent={["bg-cranberry", "bg-pine", "bg-plum"][i]}
              accentText={["text-cranberry", "text-pine", "text-plum"][i]}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={site.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-4 border-ink px-7 py-3 font-extrabold transition hover:bg-ink hover:text-white"
          >
            Visit our YouTube channel
          </a>
        </div>
      </section>
    </>
  );
}
