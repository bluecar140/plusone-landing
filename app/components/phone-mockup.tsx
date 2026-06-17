import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[220px] sm:w-[260px] ${className}`}
    >
      <div className="absolute -inset-4 rounded-[3rem] bg-accent/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-2 shadow-2xl shadow-black/80 ring-1 ring-white/10">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-surface">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 220px, 260px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
