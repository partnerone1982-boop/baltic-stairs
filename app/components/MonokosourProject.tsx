import Link from "next/link";
import Image from "next/image";

const photographs = [
  {
    "file": "general-view.webp",
    "caption": "Общий вид",
    "alt": "Лестница на монокосоуре — общий вид",
    "position": "50% 78%",
    "width": 719,
    "height": 1600
  },
  {
    "file": "frame-view.webp",
    "caption": "Монокосоур и ступени",
    "alt": "Монокосоур металлической лестницы",
    "position": "50% 65%",
    "width": 719,
    "height": 1600
  },
  {
    "file": "top-view.webp",
    "caption": "Вид сверху",
    "alt": "Лестница на монокосоуре — вид сверху на ступени и ограждение",
    "position": "65% 50%",
    "width": 1600,
    "height": 719
  }
];

export default function MonokosourProject() {
  return (
    <section id="monokosour-3" aria-labelledby="monokosour-3-title" className="mt-12">
      <h2 id="monokosour-3-title" className="text-2xl font-semibold md:text-3xl">Внутренняя лестница на монокосоуре</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Внутренняя металлическая лестница на монокосоуре, изготовленная по индивидуальным размерам объекта.</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#967020]"><Link href="/indoor" className="underline underline-offset-4">Внутренние лестницы</Link><Link href="/monokosour" className="underline underline-offset-4">Монокосоур</Link></div>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {photographs.map(({ file, caption, alt, width, height, position }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/monokosour-3/${file}`} target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/monokosour-3/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" style={{ objectPosition: position }} />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
