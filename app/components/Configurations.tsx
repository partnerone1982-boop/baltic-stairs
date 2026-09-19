import Image from "next/image";
import { configurations } from "../data/products";
// Only approved photographs showing the corresponding staircase geometry.
const backgrounds: Record<string, { src: string; position?: string; fit?: "cover" | "contain" } | null> = {
  straight: { src: "/images/configurations/straight-collage-v2.jpg", position: "50% 50%", fit: "contain" },
  "l-shaped": { src: "/images/configurations/l-shaped-collage-v5.jpg", position: "50% 50%", fit: "contain" },
  "u-shaped": { src: "/images/configurations/u-shaped-collage-v3.jpg", position: "50% 50%", fit: "contain" },
  winders: { src: "/images/configurations/winders-collage-v1.jpg", position: "50% 50%", fit: "contain" },
};
export default function Configurations({ compact = false, photoCards = false }: { compact?: boolean; photoCards?: boolean }) {
  return <section className={compact ? "border-t border-black/10 pt-6" : "mt-10 border-t border-black/10 pt-8"}>
    <h2 className="text-2xl font-semibold">Конфигурация лестницы</h2>
    <div className={`mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${photoCards ? "auto-rows-fr" : ""}`}>
      {configurations.map(item => {
        const background = photoCards ? backgrounds[item.id] : null;
        return <article key={item.id} className={photoCards
          ? "group relative isolate min-h-96 min-w-0 overflow-hidden rounded-2xl border border-black/10 bg-[#595750] p-6 text-white transition-shadow hover:border-[#c4ac70] hover:shadow-lg"
          : "min-w-0 rounded-2xl border border-[#c4ac70] bg-white p-6"}>
          {background && <>
            <Image src={background.src} alt="" fill sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, 25vw" className="-z-20 object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105" style={{ objectPosition: background.position ?? "center", objectFit: background.fit ?? "cover" }} />
            <span aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,.65) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.25) 100%)" }} />
          </>}
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className={`mt-3 leading-7 ${photoCards ? "text-white/90" : "text-zinc-600"}`}>{item.description}</p>
        </article>;
      })}
    </div>
    <p className="mt-5 max-w-4xl leading-7 text-zinc-600">Конфигурация лестницы подбирается отдельно от типа металлического каркаса и зависит от размеров помещения, высоты между этажами и планировки.</p>
  </section>;
}
