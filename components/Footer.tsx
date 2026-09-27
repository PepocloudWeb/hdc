import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, MapPin, Mail } from "lucide-react";
import { site } from "@/lib/content";
import SocialIcons from "./SocialIcons";
import Lights from "./Lights";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-pine text-white">
      <Lights count={30} />
      <div className="confetti-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-16 place-items-center overflow-hidden rounded-full bg-white">
              <Image src="/images/logo.png" alt="" width={96} height={96} className="scale-150" />
            </span>
            <span className="font-display text-2xl font-bold leading-tight">
              Hamara Desi
              <br />
              <span className="text-gold">Christmas</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-white/75">{site.tagline}.</p>
          <SocialIcons className="mt-6" />
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-gold">Date</h3>
          <p className="flex items-start gap-3 text-white/85">
            <CalendarHeart className="mt-0.5 size-5 shrink-0 text-candy" />
            {site.dateShort}
          </p>
          <h3 className="font-display text-lg font-bold text-gold">Event Location</h3>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-white/85 underline-offset-4 hover:underline"
          >
            <MapPin className="mt-0.5 size-5 shrink-0 text-ice" />
            {site.address}
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-gold">Say hello</h3>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-3 break-all text-white/85 underline-offset-4 hover:underline"
          >
            <Mail className="mt-0.5 size-5 shrink-0 text-mint" />
            {site.email}
          </a>
          <a
            href={site.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-5 py-2.5 font-extrabold text-ink transition hover:bg-white"
          >
            Register now →
          </a>
        </div>
      </div>
      <div className="candy-stripe h-3" aria-hidden />
      <p className="relative bg-berry py-4 text-center text-sm text-white/80">
        Copyright © {new Date().getFullYear()} Hamara Desi Christmas
      </p>
    </footer>
  );
}
