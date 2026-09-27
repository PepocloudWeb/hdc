"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#included", label: "What's On" },
  { href: "/#details", label: "Details" },
  { href: "/#moments", label: "Moments" },
  { href: "/#videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 border-ink/5 bg-paper/90 py-2 pl-2 pr-2 shadow-[0_8px_30px_-12px_rgba(42,26,46,0.35)] backdrop-blur md:pr-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-mint/40">
            <Image src="/images/logo.png" alt="" width={72} height={72} className="scale-150" priority />
          </span>
          <span className="font-display text-lg font-bold leading-none">
            Hamara <span className="text-cranberry">Desi</span>
            <br />
            <span className="text-pine">Christmas</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-ink/80 transition hover:bg-gold/25 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-cranberry px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_4px_0_var(--color-berry)] transition hover:translate-y-0.5 hover:shadow-[0_2px_0_var(--color-berry)] sm:inline-block"
          >
            Register now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full bg-pine text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-3xl border-2 border-ink/5 bg-paper p-3 shadow-xl lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-bold hover:bg-gold/25"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-2xl bg-cranberry px-4 py-3 text-center font-extrabold text-white"
          >
            Register now
          </a>
        </nav>
      )}
    </header>
  );
}
