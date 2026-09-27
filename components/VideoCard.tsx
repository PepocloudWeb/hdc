"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

type Props = { id: string; word: string; title: string; accent: string; accentText: string };

/** Lightweight YouTube embed: shows the thumbnail until clicked. */
export default function VideoCard({ id, word, title, accent, accentText }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group rounded-[1.75rem] bg-white p-3 shadow-[0_10px_0_-2px_rgba(42,26,46,0.08)] ring-2 ring-ink/5">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0"
            aria-label={`Play ${title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/25" />
            <span
              className={`absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white shadow-lg transition group-hover:scale-110 ${accent}`}
            >
              <Play className="ml-1 size-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="px-3 pb-2 pt-4">
        <p className={`font-display text-3xl font-bold ${accentText}`}>{word}</p>
        <h3 className="mt-1 font-bold text-ink/80">{title}</h3>
      </div>
    </article>
  );
}
