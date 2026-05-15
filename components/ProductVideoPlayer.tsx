"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function ProductVideoPlayer({
  videoUrl,
  posterUrl
}: {
  videoUrl: string;
  posterUrl?: string;
}) {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startVideo = async () => {
    setHasStarted(true);
    requestAnimationFrame(async () => {
      try {
        await videoRef.current?.play();
      } catch {
        // Keep controls visible even if autoplay is blocked.
      }
    });
  };

  return (
    <div className="relative overflow-hidden border border-line bg-graphite/50">
      {!hasStarted && posterUrl ? (
        <button
          className="group relative block aspect-video w-full overflow-hidden text-left"
          onClick={startVideo}
          type="button"
        >
          <Image
            src={posterUrl}
            alt="Chart video preview"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover object-center transition duration-300 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">Active chart video</p>
              <p className="mt-2 text-sm font-medium text-white">Watch the layout in motion</p>
            </div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal text-sm font-semibold text-ink shadow-soft transition group-hover:bg-volt">
              Play
            </span>
          </div>
        </button>
      ) : null}

      <video
        className={hasStarted ? "aspect-video w-full bg-ink" : "hidden"}
        controls
        playsInline
        poster={posterUrl}
        preload="metadata"
        ref={videoRef}
      >
        <source src={videoUrl} />
        Your browser does not support embedded video playback.
      </video>
    </div>
  );
}
