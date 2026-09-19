import Image from "next/image";
import Link from "next/link";
import { frames } from "../data/products";

// Add only approved photographs of the corresponding frame type.
const backgrounds: Record<string, { src: string; position?: string } | null> = {
  monokosour: { src: "/images/monokosour-frame.jpeg", position: "60% 45%" },
  "listovye-kosoury": { src: "/images/sheet-stringers-frame.jpg", position: "50% 50%" },
  "lomanye-kosoury": { src: "/images/broken-stringers-frame.jpg", position: "55% 45%" },
  "vintovye-lestnicy": { src: "/images/spiral-frame.jpg", position: "50% 65%" },
};

export default function FrameCards() {
  return (
    <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {frames.map((frame, index) => {
        const background = backgrounds[frame.id];
        return (
          <Link key={frame.id} href={frame.href} className="group relative isolate flex min-h-96 min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#595750] p-6 text-white transition-shadow hover:border-[#c4ac70] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#967020]">
            {background && <>
              <Image src={background.src} alt="" fill sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, 25vw" className="-z-20 object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105" style={{ objectPosition: background.position ?? "center" }} />
              <span aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />
            </>}
            <div className="text-sm text-[#e2d0a2]">0{index + 1}</div>
            <h3 className="mt-8 text-xl font-semibold">{frame.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/90">{frame.description}</p>
            <span className="mt-auto pt-6 text-sm font-semibold text-[#e2d0a2] group-hover:underline underline-offset-4">Подробнее →</span>
          </Link>
        );
      })}
    </div>
  );
}
