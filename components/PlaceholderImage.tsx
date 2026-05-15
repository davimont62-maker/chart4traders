import { cn } from "@/lib/utils";
import Image from "next/image";

export function PlaceholderImage({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  const isImage = label.startsWith("/");

  return (
    <div
      className={cn(
        "relative flex aspect-[16/9] min-h-40 items-end overflow-hidden rounded-sm border border-line bg-ink shadow-soft",
        className
      )}
    >
      {isImage ? (
        <Image
          src={label}
          alt="Sierra Chart template preview"
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="chart-lines absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/52 via-transparent to-transparent" />
      {!isImage && (
        <div className="relative w-full border-t border-line bg-black/70 p-3 backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">Sierra Chart preview</p>
          <p className="mt-2 text-sm font-semibold text-white">{label}</p>
        </div>
      )}
    </div>
  );
}
