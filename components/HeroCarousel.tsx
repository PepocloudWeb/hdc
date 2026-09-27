"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/lib/content";

const frames = ["bg-cranberry", "bg-pine", "bg-plum", "bg-tangerine"];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* stacked colored cards behind */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2rem] bg-gold" aria-hidden />
      <div className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-2 rounded-[2rem] bg-ice" aria-hidden />

      <div
        className={`relative rounded-[2rem] p-3 shadow-2xl transition-colors duration-700 ${frames[index % frames.length]}`}
      >
        <div className="relative aspect-[2/1] overflow-hidden rounded-[1.5rem] bg-ink">
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-all duration-700 ${
                i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2.5 bg-white/50"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/35"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/35"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
