import type { Metadata } from "next";
import { Mail, MapPin, CalendarDays } from "lucide-react";
import Lights from "@/components/Lights";
import Snow from "@/components/Snow";
import SocialIcons from "@/components/SocialIcons";
import { contactText, site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-br from-pine via-pine to-plum pb-24 pt-24 text-white">
        <Snow count={20} />
        <Lights count={32} />
        <div className="relative mx-auto max-w-4xl px-6 pt-10 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
            ✦ Get in touch
          </span>
          <h1 className="mt-6 font-display text-6xl font-bold sm:text-7xl">
            Contact <span className="text-gold">us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{contactText}</p>
        </div>
      </section>

      <section className="relative mx-auto -mt-14 max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group rounded-[2rem] bg-cranberry p-8 text-white shadow-xl transition hover:-translate-y-1"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-white/20">
              <Mail className="size-7" />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Email</p>
            <p className="mt-1 break-all font-display text-2xl font-bold group-hover:underline">{site.email}</p>
          </a>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] bg-gold p-8 text-ink shadow-xl transition hover:-translate-y-1"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-white/40">
              <MapPin className="size-7" />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-ink/60">Event Address</p>
            <p className="mt-1 font-display text-2xl font-bold group-hover:underline">{site.address}</p>
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-xl">
            <iframe
              title="Map to the event location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-ice p-8">
            <div>
              <span className="grid size-14 place-items-center rounded-2xl bg-white/50">
                <CalendarDays className="size-7" />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-ink/60">Date</p>
              <p className="mt-1 font-display text-2xl font-bold">{site.dateShort}</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/60">Follow along</p>
              <SocialIcons className="mt-3 text-ink" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
